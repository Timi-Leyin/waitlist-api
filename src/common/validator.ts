import { body } from 'express-validator';

export const email = body('email')
  .trim()
  .normalizeEmail()
  .isEmail()
  .withMessage('Invalid Email');

export const username = body('username', 'Username is Required')
  .escape()
  .trim()
 .isLength({min:3})
.withMessage("Username must be at least 3 characters ")
  .notEmpty();

export const password = body('password', 'Password is required')
.escape()
.isStrongPassword().withMessage("Password is not strong enough ")
