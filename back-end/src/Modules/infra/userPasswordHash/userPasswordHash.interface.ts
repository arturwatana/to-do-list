export interface IUserPasswordHash {
  hash(password: string): Promise<string>;
  compare(password: string, userPassword: string): Promise<boolean>;
}
