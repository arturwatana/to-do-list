export function verifyIfTaskExists(task) {
  let taskAlreadyExist = findTask(task);
  if (taskAlreadyExist) {
    throw new Error("Ops, voce já tem essa task");
  }
}
