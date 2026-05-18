import { Router } from "express";

const bugRouter = Router();

bugRouter.get("/projects/:id/bugs", getProjectBugs);

bugRouter.post("/projects/:id/bugs", createBug);

bugRouter.get("/:id", getBugById);

bugRouter.put("/:id", updateBug);

bugRouter.delete("/:id", deleteBug);

bugRouter.patch("/:id/status", updateBugStatus);

bugRouter.post("/:id/attachments", uploadAttachment);

export default bugRouter;