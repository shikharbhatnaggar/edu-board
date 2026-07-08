"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-3 text-muted-foreground"
        />

        <input
          className="w-full rounded-lg border bg-background py-2 pl-10 pr-4 outline-none"
          placeholder="Search boards..."
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell size={20} />

        <UserCircle2 size={34} />
      </div>
    </header>
  );
}