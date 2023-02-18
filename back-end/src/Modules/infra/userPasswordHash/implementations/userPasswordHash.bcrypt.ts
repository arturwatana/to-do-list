import bcrypt from "bcrypt";
import { IUserPasswordHash } from "../userPasswordHash.interface";

export class UserPasswordHashBCrypt implements IUserPasswordHash {
  async hash(password: string): Promise<string> {
    const passwordHashed = await bcrypt.hash(password, 10);
    return passwordHashed;
  }
  async compare(password: string, userPassword: string): Promise<boolean> {
    const passwordsAreEqual = await bcrypt.compare(password, userPassword);
    return passwordsAreEqual;
  }
}
