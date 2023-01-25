export type GenreEntity = {
  id: number;
  type: string;
};

export type Genre = Omit<GenreEntity, "id" | "acquired">;
