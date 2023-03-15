import { connectToDBError } from "../../errors/connectToDB.error.js";

export async function createUserInDB(user) {
  const userCreated = await axios
    .post(
      "https://to-do-list-server-o3q8oo2u9-arturwatana.vercel.app/register",
      user
    )
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.message);
    });
  return userCreated;
}
