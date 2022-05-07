import { Document } from 'mongoose';
import {Request as Req} from "express"
import {Express} from "express-serve-static-core"
declare module "express-serve-static-core"{
  interface Request {
    payload : string 
  }
}
/* express */
type JwtPayload = {
  id:string, 
  iat:number, 
  
}
export interface Request extends Req {
  payload?: any 
}

// db. config 
export config = (db:string)=> Promise<void>

/* Mongoose Model */
/* User model */
export interface User extends Document {
  email: string;
  username: string;
  password: string;
  verified_email?: boolean;
}

/* Auth route req. body */
export interface AuthBody {
  email: string;
  username?: string;
  password: string;
}
