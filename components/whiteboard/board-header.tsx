import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
}

export default function BoardHeader({ title }: Props) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-4">
        <Link href="/boards">
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <h1 className="text-xl font-semibold">
          {title}
        </h1>
      </div>

      <div className="text-sm text-gray-500">
        Auto Save Enabled
      </div>
    </header>
  );
}