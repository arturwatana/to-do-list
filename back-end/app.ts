import express from "express";
import { userRoutes } from "./src/routes/user.routes";

const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());
const port = 8080;

server.use(userRoutes);

server.listen(port, () => console.log(`server started at localhost:${port}`));
