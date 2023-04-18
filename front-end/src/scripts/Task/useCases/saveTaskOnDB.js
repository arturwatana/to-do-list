import { connectToDBError } from "../../errors/connectToDB.error.js";
import { sendToken } from "../../token/sendToken.js";

export async function saveTaskOnDB(task, token, email) {
  const config = sendToken(token);
  const savedTaskOnDB = await axios
    .post(`http://localhost:8080/addtask/${email}`, task, config)
    .catch((err) => {
      connectToDBError(err);
      throw new Error(err.response.data.message);
    });
  return savedTaskOnDB.data;
}
