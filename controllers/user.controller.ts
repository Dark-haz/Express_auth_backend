import { Request, Response } from "express";
import { ApiResponse } from "../utils/apiResponse";
import { UserService } from "../services/user.service";
import { ServiceException } from "../exceptions/ServiceException";
import { userRegisterSchema } from "../validators/user.register.schema";
import { userLoginSchema } from "../validators/user.login.schema";
import { ZodError } from "zod";

const userService = new UserService();

export class UserController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const parsed = userRegisterSchema.parse(req.body);
      const result = await userService.register(parsed);
      res.json(new ApiResponse(200, true, [], result));
    } catch (err: any) {
      if (err instanceof ZodError) {
        const messages = err.errors.map(
          (e) => `${e.path.join(".")}: ${e.message}`
        );
        res.status(400).json(new ApiResponse(400, false, messages, null));
      } else if (err instanceof ServiceException) {
        res
          .status(err.statusCode)
          .json(new ApiResponse(err.statusCode, false, [err.message], null));
      } else {
        res
          .status(500)
          .json(
            new ApiResponse(500, false, ["An unexpected error occurred"], null)
          );
      }
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const parsed = userLoginSchema.parse(req.body);
      const result = await userService.login(parsed);
      res.json(new ApiResponse(200, true, [], result));
    } catch (err: any) {
      if (err instanceof ZodError) {
        const messages = err.errors.map(
          (e) => `${e.path.join(".")}: ${e.message}`
        );
        res.status(400).json(new ApiResponse(400, false, messages, null));
      } else if (err instanceof ServiceException) {
        res
          .status(err.statusCode)
          .json(new ApiResponse(err.statusCode, false, [err.message], null));
      } else {
        res
          .status(500)
          .json(
            new ApiResponse(500, false, ["An unexpected error occurred"], null)
          );
      }
    }
  }

  static async me(
    req: Request & { auth?: { id: string } },
    res: Response
  ): Promise<void> {
    try {
      if (!req.auth) throw new Error("No user info");
      console.log(req.auth);

      const user = await userService.getUserById(req.auth.id);

      res.json(new ApiResponse(200, true, [], user));
    } catch (err: any) {
      if (err instanceof ServiceException) {
        res
          .status(err.statusCode)
          .json(new ApiResponse(err.statusCode, false, [err.message], null));
      } else {
        res
          .status(500)
          .json(
            new ApiResponse(500, false, ["An unexpected error occurred"], null)
          );
      }
    }
  }
}
