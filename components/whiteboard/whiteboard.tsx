import Canvas from "./canvas";
import BoardHeader from "./board-header";
import Toolbar from "./toolbar";

interface Props {
  title: string;
  boardId: string;
}

export default function Whiteboard({ title, boardId }: Props) {
  return (
    <div className="flex h-screen flex-col">

      <BoardHeader title={title} />

      <div className="flex flex-1 overflow-hidden">

        <Toolbar />

        <div className="flex-1">

          <Canvas boardId={boardId} />

        </div>

      </div>

    </div>
  );
}