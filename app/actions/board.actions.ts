"use server";

import { revalidatePath } from "next/cache";
import { BoardService } from "@/services/board.service";
import { redirect } from "next/navigation";

export async function createBoard(formData: FormData) {
  const title = formData.get("title")?.toString().trim();

  if (!title) {
    throw new Error("Board title is required.");
  }

  const board = await BoardService.createBoard(title);

  revalidatePath("/boards");

  // redirect(`/boards/${board.id}`);
}


export async function renameBoard(formData: FormData) {
  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString().trim();

  if (!id || !title) {
    throw new Error("Invalid data.");
  }

  await BoardService.renameBoard(id, title);

  revalidatePath("/boards");
}

export async function deleteBoard(id: string) {
  await BoardService.deleteBoard(id);

  revalidatePath("/boards");
}


export async function loadBoardDocument(boardId: string) {
  return BoardService.getDocument(boardId);
}

export async function saveBoardDocument(
  boardId: string,
  document: unknown
) {
  await BoardService.saveDocument(boardId, document);
}