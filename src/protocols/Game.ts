export type GameEntity = {
  id: number;
  name: string;
  plataform: string;
  genreId: number;
};

export type Game = Omit<GameEntity, "id" | "acquired">;
