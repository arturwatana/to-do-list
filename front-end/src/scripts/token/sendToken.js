export function sendToken(token) {
  if (!token) {
    throw new Error("Token not found");
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
}
