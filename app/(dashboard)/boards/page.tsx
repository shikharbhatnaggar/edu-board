import PageHeader from "@/components/common/page-header";
import PageContainer from "@/components/common/page-container";
import BoardCard from "@/components/board/board-card";
import NewBoardDialog from "@/components/board/new-board-dialog";
import { BoardService } from "@/services/board.service";

export const dynamic = "force-dynamic";

export default async function BoardsPage() {
  const boards = await BoardService.getBoards();
  
  return (
    <PageContainer>
      <PageHeader
        title="My Boards"
        description="Create and manage your interactive whiteboards."
        action={<NewBoardDialog />}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </div>
    </PageContainer>
  );
}
