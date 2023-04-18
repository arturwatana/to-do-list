import { connectToDBError } from "../../errors/connectToDB.error.js";
import { sendToken } from "../../token/sendToken.js";

export async function getTasksByEmail(email, token) {
  const config = sendToken(token);
  const userTasks = await axios
    .get(`http://localhost:8080/tasks/${email}`, config)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.error);
    });
  return userTasks.data.userTasks;
}
