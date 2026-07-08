"use client";

import { useState } from "react";
import { createBoard } from "@/app/actions/board.actions";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewBoardDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* This button is OUTSIDE the Dialog */}
      <Button onClick={() => setOpen(true)}>
        New Board
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Board</DialogTitle>
          </DialogHeader>

          <form
            action={async (formData) => {
              await createBoard(formData);
              setOpen(false);
            }}
            className="space-y-4"
          >
            <Input
              name="title"
              placeholder="Board Name"
              required
            />

            <Button type="submit">
              Create Board
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}