export function connectToDBError(err) {
  if (!err.response) {
    throw new Error(
      "Ops, isso foi possivel no momento. Tente novamente mais tarde!"
    );
  }
}
