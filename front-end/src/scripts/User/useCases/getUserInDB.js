import { connectToDBError } from "../../errors/connectToDB.error.js";

export async function getUserInDB(username) {
  const user = await axios
    .get(`http://localhost:8080/users/${username}`)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.message);
    });
  return user.data;
}
