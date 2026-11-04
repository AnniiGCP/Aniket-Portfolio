import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "visitors.json");
const TMP_PATH = path.join("/tmp", "visitors.json");
const REDIS_KEY = "portfolio-visitors";

type VisitorData = {
  count: number;
};

let cachedCount: number | null = null;

function hasRedisConfig() {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

async function redisGet(): Promise<number> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const res = await fetch(`${url}/get/${REDIS_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Redis GET failed (${res.status})`);
  }

  const data = (await res.json()) as { result: string | null };
  return data.result ? Number(data.result) : 0;
}

async function redisIncr(): Promise<number> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const res = await fetch(`${url}/incr/${REDIS_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Redis INCR failed (${res.status})`);
  }

  const data = (await res.json()) as { result: number };
  return data.result;
}

async function readFileData(): Promise<VisitorData> {
  // Try reading from /tmp first (for Vercel serverless persistence within container)
  try {
    const raw = await fs.readFile(TMP_PATH, "utf8");
    return JSON.parse(raw) as VisitorData;
  } catch {
    // Fall back to data/visitors.json
    try {
      const raw = await fs.readFile(DATA_PATH, "utf8");
      return JSON.parse(raw) as VisitorData;
    } catch {
      return { count: cachedCount ?? 138 };
    }
  }
}

async function writeFileData(data: VisitorData) {
  cachedCount = data.count;
  // Try writing to repo path (local dev)
  try {
    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
    return;
  } catch {
    // On Vercel (read-only filesystem), write to /tmp
    try {
      await fs.writeFile(TMP_PATH, JSON.stringify(data, null, 2));
    } catch {
      // Memory cache is already updated, silently succeed
    }
  }
}

export async function getVisitorCount() {
  if (hasRedisConfig()) {
    try {
      return await redisGet();
    } catch (err) {
      console.warn("Redis GET failed, falling back to local count:", err);
    }
  }

  if (cachedCount !== null) {
    return cachedCount;
  }

  const data = await readFileData();
  cachedCount = data.count;
  return data.count;
}

export async function incrementVisitorCount() {
  if (hasRedisConfig()) {
    try {
      return await redisIncr();
    } catch (err) {
      console.warn("Redis INCR failed, falling back to local count:", err);
    }
  }

  const data = await readFileData();
  data.count += 1;
  await writeFileData(data);
  return data.count;
}
