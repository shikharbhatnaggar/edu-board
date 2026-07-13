import Link from "next/link";
import { Button } from "@/components/ui/button";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="space-y-5 text-center">
        <h1 className="text-5xl font-bold">
          EduBoard
        </h1>

        <p className="text-muted-foreground">
          Interactive Whiteboard for Modern Classrooms
        </p>

        <Button>
          <Link href="/boards">
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </main>
  );
}
