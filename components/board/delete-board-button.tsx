"use client";

import { Trash2 } from "lucide-react";
import { deleteBoard } from "@/app/actions/board.actions";
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
}

export default function DeleteBoardButton({ id }: Props) {
  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this board?"
    );

    if (!confirmed) return;

    await deleteBoard(id);
  }

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleDelete}
    >
      <Trash2 className="size-4" />
    </Button>
  );
}