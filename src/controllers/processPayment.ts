import { NextFunction, Request, Response } from 'express';

export const processPayment = (_request: Request, response: Response, next: NextFunction): void => {
  try {
    response.status(200).send();
  } catch (err) {
    next(err);
  }
};
