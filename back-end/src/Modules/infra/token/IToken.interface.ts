import { User } from "../../User/entity/user.entity";

export interface IToken {
  create(user: User): string;
  validate(token: string): boolean;
}
