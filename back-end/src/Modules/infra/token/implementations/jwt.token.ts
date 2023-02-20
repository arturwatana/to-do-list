import { User } from "../../../User/entity/user.entity";
import { sign, verify } from "jsonwebtoken";
import { createHmac } from "crypto";
import { IToken } from "../IToken.interface";

export class JWTToken implements IToken {
  private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || "";

  private TOKEN_SECRET_CRYPTO = createHmac("sha256", this.TOKEN_SECRET).digest(
    "base64"
  );

  create({ username, is_Admin, id }: User): string {
    const token = sign(
      { user: { username, is_Admin, id } },
      this.TOKEN_SECRET_CRYPTO,
      {
        subject: id,
        expiresIn: "15s",
      }
    );
    return token;
  }

  validate(token: string): boolean {
    try {
      const verifyToken = verify(token, this.TOKEN_SECRET_CRYPTO);
      return true;
    } catch (err) {
      return false;
    }
  }
}
