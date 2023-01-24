import Joi from "joi";

export const GameSchema = Joi.object({
  name: Joi.string().required(),
  plataform: Joi.string().required(),
  genre: Joi.string().required(),
});
