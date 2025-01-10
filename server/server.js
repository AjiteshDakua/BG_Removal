import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

// APP Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB()

//Intialize middlewares
app.use(express.json());
app.use(cors());

// API routes
app.get("/", (res, req) => res.send("API Working"));

app.listen(PORT, () => console.log("Server Running on port " +  PORT));
