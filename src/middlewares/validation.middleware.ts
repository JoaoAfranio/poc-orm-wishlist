import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema);
}

function validate(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      res.status(400).send(error.details.map((d) => d.message));
    }
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
