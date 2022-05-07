import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import mongoose from "mongoose"

import { Request } from '../@types';

const SECRET = process.env.SECRET ?? '';
export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;

    if (header && typeof header == 'string') {
      const bearer = header;
      const payload = await jwt.verify(bearer, SECRET);

      req.payload = payload;
      return next();
    }
    return res.status(403).send({ message: 'Access denied' });
  } catch (err) {
    res.status(403).send({ message: 'Invalid Token' });
  }
};
