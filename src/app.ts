import express, { Application, Request, Response } from "express";
import logger from "morgan";
import cors from "cors";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(logger("dev"));
    this.app.use(cors());
  }

  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({ message: "Hola mundo" });
    });
  }
}

const app = new App().app;

export default app;
