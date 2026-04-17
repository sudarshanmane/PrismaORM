import { setupRoutes } from "./src/routes";
import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(setupRoutes());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
