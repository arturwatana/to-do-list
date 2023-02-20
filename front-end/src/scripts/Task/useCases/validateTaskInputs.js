export function validateTaskInputs(taskName, urgencyInput, endDate) {
  if (!taskName || !urgencyInput || !endDate) {
    throw new Error("Ops, faltou preencher alguns campos");
  }
}
