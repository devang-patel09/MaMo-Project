import { Router } from "express";

const commentRouter = Router();

commentRouter.get("/bugs/:id/comments", getBugComments);

commentRouter.post("/bugs/:id/comments", createComment);

commentRouter.delete("/:id", deleteComment);

export default commentRouter;