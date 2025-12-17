import { Request, Response } from "express";
import * as authService from "./auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  await authService.register(email, password);
  res.status(201).json({ message: "User created" });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const token = await authService.login(email, password);

  res.json({ token });
};
