import express from "express"
import connectDB from "./config/db.js"
import dns from "dns/promises"
dns.setServers(["8.8.8.8", "1.1.1.1"])
import authRouter from "./routes/Auth.routes.js"
import projectRouter from "./routes/Project.routes.js"
import bugRouter from "./routes/Bug.routes.js"
import commentRouter from "./routes/Comment.routes.js"
import notificationRouter from "./routes/Notification.routes.js"
import AiRouter from "./routes/Ai.routes.js"

connectDB()

const app = express()
app.use("/auth", authRouter)
app.use("/projects", projectRouter)
app.use("/bugs", bugRouter)
app.use("/comments", commentRouter)
app.use("/notifications", notificationRouter)
app.use("/ai", AiRouter)

app.use(express.json())

export default app