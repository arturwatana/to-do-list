import { Router } from "express";
import { UserRepositoryMemory } from "../Modules/User/repositories/implementations/userRepository.memory";
import { createUserController } from "../Modules/User/useCases/index";

const userRoutes = Router();

const userRepository = UserRepositoryMemory.getInstance();

userRoutes.post("/register", (req, res) => {
  createUserController.handle(req, res);
});

userRoutes.get("/users", (req, res) => {
  res.send(userRepository);
});

export { userRoutes };
