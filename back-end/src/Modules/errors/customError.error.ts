export class CustomError extends Error {
  statusCode?: number;
  name: string;

  constructor(message: string, statusCode = 500, name = "") {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}
