import { Router } from "express";
import { createProject, getProjects, getProjectById, updateProject, deleteProject, inviteUser } from "../controllers/Project.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const projectRouter = Router();

projectRouter.get("/", protect, getProjects);

projectRouter.post("/create", protect, createProject);

projectRouter.get("/:id", getProjectById);

projectRouter.put("/:id", updateProject);

projectRouter.delete("/:id", deleteProject);

projectRouter.post("/:id/invite", inviteUser);

export default projectRouter;