import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth/auth-route.js";
import eventRouter from "./routes/event/event-route.js";
dotenv.config();

const DBURL = process.env.DB_URL;

mongoose
  .connect(DBURL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: "frontend url",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/event", eventRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
