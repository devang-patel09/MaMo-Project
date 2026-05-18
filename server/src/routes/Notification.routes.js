import { Router } from "express";

const notificationRouter = Router();

notificationRouter.get("/", getNotifications);

notificationRouter.patch("/read-all", markAllAsRead);

export default notificationRouter