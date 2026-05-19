import { Router } from "express";
import { registerUser, loginUser, logoutUser} from "../controllers/Auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

// authRouter.post("/refresh", refreshToken);

authRouter.post("/logout", logoutUser);

// authRouter.get("/verify-email", verifyEmail);

// authRouter.post("/forgot-password", forgotPassword);

// authRouter.post("/reset-password/:token", resetPassword);


export default authRouter;