export class Task {
  constructor(name, urgency_task, endDate) {
    if (!name || !urgency_task || !endDate)
      throw new Error("Ops, faltaram alguns campos para adicionar sua task!");

    const endDateFormat = endDate.split("-");
    const todayDate = new Date().toString().split(" ");
    const month = new Date().getMonth() + 1;

    this.name = name;
    this.urgency_task = urgency_task;
    this.todayDate = `${todayDate[2]}/${month}/${todayDate[3]}`;
    this.endDate = `${endDateFormat[2]}/${endDateFormat[1]}/${endDateFormat[0]}`;
  }
}
