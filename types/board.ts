export interface Board {
  id: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  createdAt: Date;
  updatedAt: Date;
}