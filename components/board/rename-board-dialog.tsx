"use client";

import { useState } from "react";
import { renameBoard } from "@/app/actions/board.actions";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  id: string;
  title: string;
}

export default function RenameBoardDialog({
  id,
  title,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
      >
        ✏️
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Board</DialogTitle>
          </DialogHeader>

          <form
            action={async (formData) => {
              await renameBoard(formData);
              setOpen(false);
            }}
            className="space-y-4"
          >
            <input type="hidden" name="id" value={id} />

            <Input
              name="title"
              defaultValue={title}
              required
            />

            <Button type="submit">
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}