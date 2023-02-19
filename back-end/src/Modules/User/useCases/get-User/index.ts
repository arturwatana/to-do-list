import { UserRepositoryMemory } from "../../repositories/implementations/userRepository.memory";
import { GetUserInDBController } from "./get-user.controller";

const usersRepository = UserRepositoryMemory.getInstance();
const getUserInDBController = new GetUserInDBController(usersRepository);

export { getUserInDBController };
