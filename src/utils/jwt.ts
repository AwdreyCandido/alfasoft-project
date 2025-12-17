import jwt, { JwtPayload } from "jsonwebtoken";

export const sign = (payload: object): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
};

export const verify = (token: string): string | JwtPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
