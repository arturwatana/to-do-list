export async function getUsersInDB() {
  const users = await axios.get("http://localhost:8080/users");
  return users.data.users;
}
