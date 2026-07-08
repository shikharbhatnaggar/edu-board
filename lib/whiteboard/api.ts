export async function loadBoard(boardId: string) {
  const res = await fetch(`/api/boards/${boardId}`);

  if (!res.ok) {
    throw new Error("Unable to load board");
  }

  return res.json();
}

export async function saveBoard(
  boardId: string,
  document: unknown
) {
  await fetch(`/api/boards/${boardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document,
    }),
  });
}