import { UserPasswordHashBCrypt } from "../../../infra/userPasswordHash/implementations/userPasswordHash.bcrypt";
import { UserRepositoryMemory } from "../../repositories/implementations/userRepository.memory";
import { AuthenticateUserController } from "./authenticateUser.controller";

const usersRepository = UserRepositoryMemory.getInstance();
const passwordHash = new UserPasswordHashBCrypt();
const authenticateUserController = new AuthenticateUserController(
  usersRepository,
  passwordHash
);

export { authenticateUserController };
