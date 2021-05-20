import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const paymentToken = (request: Request, response: Response, next: NextFunction): void => {
  try {
    let paymentToken;
    const { body } = request;

    if (!body.hasOwnProperty('cardNumber')) {
      response.status(422).send({
        error: 'No payment method provided',
      });

      return;
    }

    if (body.cardNumber === '1111 1111 1111 1111') {
      response.status(500).send({
        error: 'Failed to get payment token',
      });

      return;
    }

    if (body.cardNumber === '2222 2222 2222 2222') {
      paymentToken = '22222222-2222-2222-2222-222222222222';
    } else {
      paymentToken = uuidv4();
    }

    response.status(200).send({
      paymentToken,
    });
  } catch (err) {
    next(err);
  }
};
