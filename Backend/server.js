import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import folderRoutes from "./routes/folderRoutes.js";

dotenv.config();

const app = express();

console.log("STEP 1: SERVER START");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("WORKING");
});

console.log("STEP 2: BEFORE DB");

await connectDB();

console.log("STEP 3: DB CONNECTED");

app.use("/api/notes", noteRoutes);



app.use("/api/folders",folderRoutes);

app.listen(5001, "0.0.0.0", () => {
  console.log("STEP 4: SERVER RUNNING");
});