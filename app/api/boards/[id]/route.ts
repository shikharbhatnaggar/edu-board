import { NextResponse } from "next/server";
import { BoardService } from "@/services/board.service";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  const board = await BoardService.getBoard(id);

  if (!board) {
    return NextResponse.json(
      { error: "Board not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(board);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await request.json();

  await BoardService.saveDocument(
    id,
    body.document
  );

  return Response.json({
    success: true,
  });
}