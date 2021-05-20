import { NextFunction, Request, Response } from 'express';

export const processPayment = (request: Request, response: Response, next: NextFunction): void => {
  try {
    const { params } = request;

    if (!params.hasOwnProperty('paymentToken')) {
      response.status(422).send({
        error: 'No payment token provided',
      });

      return;
    }

    if (params.paymentToken === '22222222-2222-2222-2222-222222222222') {
      response.status(422).send({
        error: 'Payment was declined',
      });

      return;
    }

    response.status(200).send();
  } catch (err) {
    next(err);
  }
};
