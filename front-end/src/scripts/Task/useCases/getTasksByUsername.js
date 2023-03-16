import { connectToDBError } from "../../errors/connectToDB.error.js";
import { sendToken } from "../../token/sendToken.js";

export async function getTasksByUsername(username, token) {
  const config = sendToken(token);
  const userTasks = await axios
    .get(`https://to-do-list-server-nine.vercel.app/tasks/${username}`, config)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.error);
    });
  return userTasks.data.userTasks;
}
