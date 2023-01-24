import { Router } from "express";
import { countGamesGenre, deleteById, findAllGames, insertGame, updateById } from "../controllers/games.controller.js";

const router = Router();

router.get("/games", findAllGames);
router.post("/games", insertGame);
router.delete("/games/:id", deleteById);
router.patch("/games/:id", updateById);

router.get("/genres", countGamesGenre);

export default router;
