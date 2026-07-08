import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">
        Board not found
      </h1>

      <Link
        href="/boards"
        className="text-blue-600"
      >
        Back to Boards
      </Link>
    </div>
  );
}