import Joi from "joi";

export const GameSchema = Joi.object({
  name: Joi.string().required(),
  plataform: Joi.string().required(),
  genreId: Joi.number().required(),
});

export const GameWishlistRatingSchema = Joi.object({
  idUser: Joi.number().required(),
  rating: Joi.number(),
});

export const GameWishlistSchema = Joi.object({
  idGame: Joi.number().required(),
  idUser: Joi.number().required(),
});
