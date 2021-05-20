import { NextFunction, Request, Response } from 'express';

export const paymentToken = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.status(200).send();
  } catch (err) {
    next(err);
  }
};
