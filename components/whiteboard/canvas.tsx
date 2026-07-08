"use client";

import { useRef } from "react";
import {
  Editor,
  Tldraw,
  getSnapshot,
  loadSnapshot,
} from "tldraw";
import "tldraw/tldraw.css";

interface CanvasProps {
  boardId: string;
}

export default function Canvas({ boardId }: CanvasProps) {
  const editorRef = useRef<Editor | null>(null);

  // Load board when editor is ready
  function handleMount(editor: Editor) {
    editorRef.current = editor;

    void loadBoard(editor);

    editor.store.listen(() => {
        scheduleSave();
    });
  }

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    function scheduleSave() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            saveBoard();
        }, 2000);
    }

  async function loadBoard(editor: Editor) {
    try {
        const response = await fetch(`/api/boards/${boardId}`);

        if (!response.ok) {
        console.error("Failed to load board");
        return;
        }

        const board = await response.json();

        if (board.document) {
            loadSnapshot(editor.store, board.document);

            console.log("Board loaded");
        } 
        else {
            console.log("New board");
        }
    } catch (err) {
        console.error(err);
    }
}

  // Manual save (we'll replace this with autosave later)
  async function saveBoard() {
    const editor = editorRef.current;

    if (!editor) return;

    try {
        const snapshot = getSnapshot(editor.store);
        console.log(snapshot);
        const response = await fetch(`/api/boards/${boardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          document: snapshot,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      console.log("✅ Board saved");
    } catch (error) {
      console.error("Error saving board:", error);
    }
  }

  return (
    <div className="relative h-full w-full">
      <Tldraw onMount={handleMount} />

      {/* Temporary Save Button */}
      <button
        onClick={saveBoard}
        className="absolute top-4 right-4 z-50 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
      >
        💾 Save
      </button>
    </div>
  );
}