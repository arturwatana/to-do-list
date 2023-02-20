import { NextFunction, Request, Response } from "express";
import { JWTToken } from "../token/implementations/jwt.token";

export const ensureAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    return res
      .status(401)
      .json({ error: "Ops, parece que voce ainda não efetuou o login" });
  }

  const [, token] = headerAuth.split(" ");

  if (!token) {
    return res
      .status(401)
      .json({ error: "Ops, parece que voce ainda não efetuou o login" });
  }

  const verifyToken = new JWTToken().validate(token);
  if (verifyToken) {
    return next();
  }
  return res.status(401).json({
    error: "Seu token de autorizacao expirou, faca o login para continuar! ",
  });
};
