export function sendToken(token) {
  if (!token) {
    throw new Error("Ops, parece que voce ainda nao fez o login");
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
}
