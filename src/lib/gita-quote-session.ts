import { bhagavadGitaQuotes, type GitaQuote } from "@/data/bhagavadGitaQuotes";

export const SESSION_KEY = "bhagavad_gita_session_quote";
export const LAST_QUOTE_KEY = "bhagavad_gita_last_quote";

// Safe initial default quote (user's iconic verse)
export const DEFAULT_GITA_QUOTE: GitaQuote =
  bhagavadGitaQuotes.find((q) => q.id === 201) ?? bhagavadGitaQuotes[0]!;

/**
 * Returns the session-persisted Bhagavad Gita quote.
 *
 * Requirements:
 * 1. Checks sessionStorage first — if a quote is already active, returns it
 *    so page refreshes, remounts, and navigation always show the EXACT same quote.
 * 2. If no quote exists in sessionStorage (new session):
 *    - Reads localStorage to find the last displayed quote ID.
 *    - Excludes that ID to prevent immediate repetition across sessions.
 *    - Randomly selects from the remaining candidate pool.
 *    - Stores selected ID into sessionStorage and localStorage.
 */
export function getSessionGitaQuote(): GitaQuote {
  if (typeof window === "undefined") {
    return DEFAULT_GITA_QUOTE;
  }

  try {
    // 1. Check active session storage
    const sessionVal = sessionStorage.getItem(SESSION_KEY);
    if (sessionVal) {
      const parsedId = Number(sessionVal);
      if (!Number.isNaN(parsedId)) {
        const found = bhagavadGitaQuotes.find((q) => q.id === parsedId);
        if (found) return found;
      }
      try {
        const parsedObj = JSON.parse(sessionVal) as GitaQuote;
        if (parsedObj?.text && parsedObj?.chapter && parsedObj?.verse) {
          return parsedObj;
        }
      } catch {
        // Continue to fresh selection
      }
    }

    // 2. New session: exclude previous session's quote ID
    let lastId: number | null = null;
    const lastVal = localStorage.getItem(LAST_QUOTE_KEY);
    if (lastVal) {
      const parsedLast = Number(lastVal);
      if (!Number.isNaN(parsedLast)) {
        lastId = parsedLast;
      }
    }

    const candidatePool =
      lastId !== null
        ? bhagavadGitaQuotes.filter((q) => q.id !== lastId)
        : bhagavadGitaQuotes;

    const pool = candidatePool.length > 0 ? candidatePool : bhagavadGitaQuotes;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selected = pool[randomIndex] ?? DEFAULT_GITA_QUOTE;

    // 3. Persist for session and update last seen
    sessionStorage.setItem(SESSION_KEY, String(selected.id));
    localStorage.setItem(LAST_QUOTE_KEY, String(selected.id));

    return selected;
  } catch (err) {
    console.warn("Storage access failed, using in-memory fallback:", err);
    return DEFAULT_GITA_QUOTE;
  }
}

