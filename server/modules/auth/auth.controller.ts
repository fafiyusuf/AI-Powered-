import { Request, Response, NextFunction } from "express";
import { registerService, loginService } from "./auth.service";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerService(name, email, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const data = await loginService(email, password);

    res.json({
      success: true,
      message: "Login successful",
      data,
    });

  } catch (err) {
    next(err);
  }
};
