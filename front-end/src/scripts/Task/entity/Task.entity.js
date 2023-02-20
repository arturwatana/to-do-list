export class Task {
  constructor(name, urgency_task, endDate) {
    if (!name || !urgency_task || !endDate)
      throw new Error("Ops, faltaram alguns campos para adicionar sua task!");

    const endDateFormat = endDate.split("-");
    const todayDate = new Date().toString().split(" ");
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    this.name = name;
    this.urgency = urgency_task;
    this.created_At = `${todayDate[2]}/${month}/${todayDate[3]}`;
    this.end_At = `${endDateFormat[2]}/${endDateFormat[1]}/${endDateFormat[0]}`;
  }
}
