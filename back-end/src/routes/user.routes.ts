import { Router } from "express";
import { UserRepositoryMemory } from "../Modules/User/repositories/implementations/userRepository.memory";
import { createUserController } from "../Modules/User/useCases/create-user/index";
import { getUserInDBController } from "../Modules/User/useCases/get-User";

const userRoutes = Router();

const userRepository = UserRepositoryMemory.getInstance();

userRoutes.post("/register", (req, res) => {
  createUserController.handle(req, res);
});

userRoutes.get("/users", (req, res) => {
  res.send(userRepository);
});
userRoutes.get("/users/:username", async (req, res) => {
  getUserInDBController.handle(req, res);
});
userRoutes.get("/login/:username", (req, res) => {});

export { userRoutes };
