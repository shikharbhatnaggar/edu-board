import { BoardRepository } from "@/repositories/board.repository";

const repository = new BoardRepository();

export class BoardService {
  static async getBoards() {
    return repository.findAll();
  }

  static async createBoard(title: string) {
    return repository.create(title);
  }

  static async renameBoard(id: string, title: string) {
    return repository.rename(id, title);
  }

  static async deleteBoard(id: string) {
    return repository.delete(id);
  }

  static async getBoard(id: string) {
    return repository.findById(id);
  }

  static async loadDocument(id: string) {
    return repository.getDocument(id);
  }

  static async saveDocument(id: string, document: unknown) {
    return repository.saveDocument(id, document);
  }
}