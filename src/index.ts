import express from "express";
import { setupRoutes } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is running");
});

app.use(setupRoutes());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
