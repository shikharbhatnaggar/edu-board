import { db } from "@/lib/db";

export class BoardRepository {
  async findAll() {
    return db.board.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  async create(title: string) {
    return db.board.create({
      data: { title },
    });
  }

  async rename(id: string, title: string) {
    return db.board.update({
      where: { id },
      data: { title },
    });
  }

  async delete(id: string) {
    return db.board.delete({
      where: { id },
    });
  }

  async findById(id: string) {
    return db.board.findUnique({
      where: {
        id,
      },
    });
  }

  async getDocument(id: string) {
    return db.board.findUnique({
      where: { id },
      select: {
        document: true,
      },
    });
  }

  async saveDocument(id: string, document: unknown) {
    return db.board.update({
      where: { id },
      data: {
        document,
      },
    });
  }
}