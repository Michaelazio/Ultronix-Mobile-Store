import homeRoute from "./homeRoute.js";
import { Router } from "express";

const clientRouter = Router() 

clientRouter.get("/*", homeRoute);

export default clientRouter;