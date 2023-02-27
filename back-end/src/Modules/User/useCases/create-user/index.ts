import { UserPasswordHashBCrypt } from "../../../infra/userPasswordHash/implementations/userPasswordHash.bcrypt";
import { UserRepositoryMemory } from "../../repositories/implementations/userRepository.memory";
import { UserMongoRepository } from "../../repositories/implementations/userRepository.mongodb";
import { CreateUserController } from "./create-user.controller";

const userRepository = UserRepositoryMemory.getInstance();
const userMongoRepository = new UserMongoRepository();

const passwordHash = new UserPasswordHashBCrypt();
const createUserController = new CreateUserController(
  userMongoRepository,
  passwordHash
);

export { createUserController };
