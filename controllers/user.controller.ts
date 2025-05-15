import { Request, Response } from "express";
import { ApiResponse } from "../utils/apiResponse";
import { UserService } from "../services/user.service";
import { ServiceException } from "../exceptions/ServiceException";

const userService = new UserService();

export class UserController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const result = await userService.register(req.body);
      res.json(new ApiResponse(200, true, [],  result ));
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

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const result = await userService.login(req.body);
      res.json(new ApiResponse(200, true, [], result));
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
