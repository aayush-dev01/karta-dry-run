import Link from "next/link";
import { Button } from "@/components/Button";

export default function BlogNotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-karta-text">Post not found</h1>
      <p className="mt-3 text-karta-muted">
        This article may have been moved or doesn&apos;t exist.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button href="/blog">View all posts</Button>
        <Link href="/" className="rounded-full px-6 py-3 text-sm font-semibold text-karta-primary hover:underline">
          Go home
        </Link>
      </div>
    </div>
  );
}
