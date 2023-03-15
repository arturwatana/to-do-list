import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { MongoDB } from "./src/Modules/infra/database/connect";
import { taskRoutes } from "./src/routes/tasks.routes";
import { userRoutes } from "./src/routes/user.routes";

const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());
const port = 8080;
const MongoDBConnection = new MongoDB();
MongoDBConnection.connect();

server.use(userRoutes);
server.use(taskRoutes);

server.listen(port, () => console.log(`server started at localhost:${port}`));
