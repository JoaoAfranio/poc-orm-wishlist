import { Router } from "express";
import { findAllGames, insertGame, deleteById, countGamesGenre, updateById, findGamesByGenre } from "../controllers/games.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { GameWishlistRatingSchema, GameSchema, GameWishlistSchema } from "../schemas/game.schema.js";

const router = Router();

router.get("/games", findAllGames);
router.post("/games", validateBody(GameSchema), insertGame);
router.delete("/games/:id", deleteById);
router.post("/games/wishlist/:id", validateBody(GameWishlistRatingSchema), updateById);

router.get("/games/genre/:id", findGamesByGenre);
router.get("/games/count", countGamesGenre);

export default router;
