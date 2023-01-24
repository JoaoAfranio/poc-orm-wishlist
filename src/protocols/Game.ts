export type GameEntity = {
  id: number;
  name: string;
  plataform: string;
  genre: string;
  acquired: boolean;
  rating?: number;
};

export type Game = Omit<GameEntity, "id" | "acquired">;
