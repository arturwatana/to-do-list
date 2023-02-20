export interface ITask {
  id?: string;
  name: string;
  urgency: string;
  id_user?: string;
  created_At: Date;
  end_At: string;
}
