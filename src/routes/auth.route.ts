import { Router } from "express";
import registerController from "../controllers/auth/auth.register";
import loginController from "../controllers/auth/auth.login";

const route = Router();
route.post("/register", registerController);
route.post("/login", loginController);

export default route;
