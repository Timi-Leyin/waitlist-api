import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  username: string;
  password: string;
  verified_email?: boolean;
}
