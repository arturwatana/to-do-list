import { connectToDBError } from "../../errors/connectToDB.error.js";

export async function getUserInDB(username) {
  const user = await axios
    .get(
      `https://to-do-list-server-o3q8oo2u9-arturwatana.vercel.app/users/${username}`
    )
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.message);
    });
  return user.data;
}
