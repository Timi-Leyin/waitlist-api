import { body } from 'express-validator';

export const email = body('email', 'Email is required')
  .notEmpty()
  .trim()
  .normalizeEmail()
  .isEmail()
  .withMessage('Invalid Email');

export const username = body('username', 'Username is Required')
  .escape()
  .isLength({ min: 3 })
  .withMessage('Username must be at least 3 characters')
  .matches(/[a-zA-Z]|[0-9]/g)
  .withMessage('Username is not accepted');

export const password = body('password', 'Password is required')
  .escape()
  .isStrongPassword()
  .withMessage('Password is not strong enough ')
  .notEmpty();
