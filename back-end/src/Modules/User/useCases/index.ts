import { UserPasswordHashBCrypt } from "../../infra/userPasswordHash/implementations/userPasswordHash.bcrypt";
import { UserRepositoryMemory } from "../repositories/implementations/userRepository.memory";
import { CreateUserController } from "./create-user.controller";

const userRepository = UserRepositoryMemory.getInstance();
const passwordHash = new UserPasswordHashBCrypt();
const createUserController = new CreateUserController(
  userRepository,
  passwordHash
);

export { createUserController };
