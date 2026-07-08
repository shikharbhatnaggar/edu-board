import { notFound } from "next/navigation";

import { Whiteboard } from "@/components/whiteboard";
import { BoardService } from "@/services/board.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BoardPage({
  params,
}: Props) {

  const { id } = await params;

  const boards = await BoardService.getBoards();

  const board = boards.find((b) => b.id === id);

  if (!board) {
    notFound();
  }

  return (
    <Whiteboard
      title={board.title}
      boardId={board.id}
    />
  );
}