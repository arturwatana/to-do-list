export function verifyIfTaskExists(taskName, tasksRepository) {
  let taskAlreadyExist = tasksRepository.find((task) => task.name === taskName);
  if (taskAlreadyExist) {
    throw new Error("Ops, voce já tem essa task");
  }
}
