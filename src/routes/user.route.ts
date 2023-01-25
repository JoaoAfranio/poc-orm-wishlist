import { Router } from "express";
import { deleteById, findAllGamesWishlist, findAllUsers, insertUser } from "../controllers/user.controller.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { UserSchema } from "../schemas/user.schema.js";

const router = Router();

router.get("/users", findAllUsers);
router.post("/users", validateBody(UserSchema), insertUser);
router.delete("/users/:id", deleteById);
router.get("/users/:id/wishlist", findAllGamesWishlist);

export default router;
