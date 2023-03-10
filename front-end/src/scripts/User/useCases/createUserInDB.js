import { connectToDBError } from "../../errors/connectToDB.error.js";

export async function createUserInDB(user) {
  const userCreated = await axios
    .post("http://localhost:8080/register", user)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.message);
    });
  return userCreated;
}
