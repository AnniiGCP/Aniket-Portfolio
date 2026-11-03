import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404: Page Not Found | Aniket Yadav",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center pb-16 pt-20">
      <Container className="text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </Container>
    </div>
  );
}
