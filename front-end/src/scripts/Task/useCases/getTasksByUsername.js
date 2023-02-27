import { connectToDBError } from "../../errors/connectToDB.error.js";

export async function getTasksByUsername(username) {
  const userTasks = await axios
    .get(`http://localhost:8080/tasks/${username}`)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.message);
    });
  return userTasks.data.userTasks;
}
