import { JWTToken } from "../../../infra/token/implementations/jwt.token";
import { UserPasswordHashBCrypt } from "../../../infra/userPasswordHash/implementations/userPasswordHash.bcrypt";
import { UserRepositoryMemory } from "../../repositories/implementations/userRepository.memory";
import { UserMongoRepository } from "../../repositories/implementations/userRepository.mongodb";
import { AuthenticateUserController } from "./authenticateUser.controller";

const usersRepository = UserRepositoryMemory.getInstance();
const userMongoRepository = new UserMongoRepository();

const passwordHash = new UserPasswordHashBCrypt();
const token = new JWTToken();
const authenticateUserController = new AuthenticateUserController(
  userMongoRepository,
  passwordHash,
  token
);

export { authenticateUserController };
