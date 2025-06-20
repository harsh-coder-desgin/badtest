import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userRouter from "./routes/user.routes.js";

dotenv.config(); // ✅ Load .env for CORS_ORIGIN and DB

const app = express();

connectDB(); // ✅ Safe to keep here for Vercel

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/users", userRouter); // ✅ Your route

export { app };
