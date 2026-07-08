import Link from "next/link";
import { Pencil, Trash2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Board } from "@/types/board";
import { formatDate } from "@/lib/date";
import RenameBoardDialog from "./rename-board-dialog";
import DeleteBoardButton from "./delete-board-button";


interface Props {
  board: Board;
}

export default function BoardCard({ board }: Props) {

  // console.log("Board:", board);
  // console.log("Created At:", board.createdAt);
  // console.log("Type:", typeof board.createdAt);

  return (
    <Card className="transition hover:shadow-lg">
      <CardContent className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold">{board.title}</h2>

          <p className="text-sm text-muted-foreground">
            {board.description}
          </p>
        </div>

        <div className="space-y-1 text-xs text-muted-foreground">
          <p>Created: {formatDate(board.createdAt)}</p>
          <p>Updated: {formatDate(board.updatedAt)}</p>
        </div>

        

        <div className="flex justify-between">
            <Link href={`/boards/${board.id}`}>
              <Button>
                Open
              </Button>
            </Link>

          <div className="flex gap-2">
            <RenameBoardDialog
              id={board.id}
              title={board.title}
            />

            <DeleteBoardButton id={board.id} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}