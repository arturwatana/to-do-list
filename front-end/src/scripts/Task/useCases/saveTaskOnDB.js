import { connectToDBError } from "../../errors/connectToDB.error.js";

export async function saveTaskOnDB(task, token, username) {
  if (!token) {
    throw new Error("Token not found");
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const savedTaskOnDB = await axios
    .post(`http://localhost:8080/addtask/${username}`, task, config)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.error);
    });
  console.log(savedTaskOnDB.data);
  return savedTaskOnDB.data;
}
