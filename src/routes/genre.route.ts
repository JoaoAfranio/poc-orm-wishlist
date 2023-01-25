import { Router } from "express";
import { deleteById, findAllGenres, insertGenre } from "../controllers/genre.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { GenreSchema } from "../schemas/genre.schema.js";

const router = Router();

router.get("/genres", findAllGenres);
router.post("/genres", validateBody(GenreSchema), insertGenre);
router.delete("/genres/:id", deleteById);

export default router;
