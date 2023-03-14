import { Router } from "express";
import { UserRepositoryMemory } from "../Modules/User/repositories/implementations/userRepository.memory";
import { UserMongoRepository } from "../Modules/User/repositories/implementations/userRepository.mongodb";
import { authenticateUserController } from "../Modules/User/useCases/authenticateUser/index";
import { createUserController } from "../Modules/User/useCases/create-user/index";
import { getUserInDBController } from "../Modules/User/useCases/get-User";

const userRoutes = Router();

const userRepository = new UserMongoRepository();
userRoutes.post("/register", (req, res) => {
  createUserController.handle(req, res);
});
userRoutes.get("/users", async (req, res) => {
  res.send(await userRepository.findAllUsers());
});
userRoutes.get("/users/:username", async (req, res) => {
  getUserInDBController.handle(req, res);
});
userRoutes.post("/login", (req, res) => {
  authenticateUserController.handle(req, res);
});

export { userRoutes };
