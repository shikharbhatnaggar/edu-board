"use client";

import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

interface CanvasProps {
  boardId: string;
}

export default function Canvas({ boardId }: CanvasProps) {
  console.log("Current Board:", boardId);

  return (
    <div className="h-full w-full">
      <Tldraw />
    </div>
  );
}