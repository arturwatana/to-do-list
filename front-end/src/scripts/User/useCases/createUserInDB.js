export async function createUserInDB(user) {
  const userCreated = await axios
    .post("http://localhost:8080/register", user)
    .catch((err) => {
      if (!err.response) {
        throw new Error(
          "Ops, não foi possivel te cadastrar no momento. Tente novamente mais tarde!"
        );
      }
      throw new Error(err.response.data.message);
    });
  return userCreated;
}
