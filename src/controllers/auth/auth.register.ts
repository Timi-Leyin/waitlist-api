import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import UserModel from '../../models/User';

export default async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    // Check if req body is valid
    const error = validationResult(req);
    //const { errors } = error;
    console.log(error);
    //    if (!error.isEmpty()) return res.status(400).send({ message: error.errors[0].msg });

    // check if username or email exists
    const email_exists = await UserModel.findOne({ email });
    const user_exists = await UserModel.findOne({ username });
    if (email_exists || user_exists)
      return res
        .status(400)
        .send({ message: 'Username or email address already exists ' });
    // Add user if no user exist with email or username
    const user = new UserModel({});
    console.log(user);
    console.log({ email, username, password });
    res.status(201).send({ message: 'Registered  ® ' });
  } catch (err) {
    res.status(500).send({ message: 'An error Occurred' });
  }
};
