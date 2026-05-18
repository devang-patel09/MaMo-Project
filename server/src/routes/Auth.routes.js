import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.post("/refresh", refreshToken);

authRouter.post("/logout", logoutUser);

authRouter.get("/verify/:token", verifyEmail);

authRouter.post("/forgot-password", forgotPassword);

authRouter.post("/reset-password/:token", resetPassword);


export default authRouter;