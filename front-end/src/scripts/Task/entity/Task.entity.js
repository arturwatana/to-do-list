export class Task {
  constructor(name, urgency_task, endDate) {
    if (!name || !urgency_task || !endDate)
      throw new Error("Ops, faltaram alguns campos para adicionar sua task!");

    const today = new Date();

    this.name = name;
    this.urgency = urgency_task;
    this.created_At = today;
    this.end_At = endDate;
  }
}
