import { UserRepositoryMemory } from "../../repositories/implementations/userRepository.memory";
import { UserMongoRepository } from "../../repositories/implementations/userRepository.mongodb";
import { GetUserInDBController } from "./get-user.controller";

const usersRepository = UserRepositoryMemory.getInstance();
const userMongoRepository = new UserMongoRepository();

const getUserInDBController = new GetUserInDBController(userMongoRepository);

export { getUserInDBController };
