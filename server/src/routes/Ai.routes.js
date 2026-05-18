import { Router } from "express";

const AiRouter = Router();

AiRouter.post("/explain", explainBug);

AiRouter.post("/suggest", suggestFix);

AiRouter.post("/summarize", summarizeBugs);

AiRouter.post("/prioritize", prioritizeBugs);

export default AiRouter;