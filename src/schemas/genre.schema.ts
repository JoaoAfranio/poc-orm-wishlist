import Joi from "joi";

export const GenreSchema = Joi.object({
  type: Joi.string().required(),
});
