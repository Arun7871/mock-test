import express from "express";
import connectDB from "./config/db";
import mockTestRoutes from "./routes/mockTestRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/api/mockTest", mockTestRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
