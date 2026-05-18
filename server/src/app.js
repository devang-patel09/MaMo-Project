import express from "express"
import connectDB from "./config/db.js"
import dns from "dns/promises"
dns.setServers(["8.8.8.8", "1.1.1.1"])

connectDB()

const app = express()

app.use(express.json())

export default app