import express, { Request, Response } from "express";
import routes from "./app/routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management System.");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

export default app;
