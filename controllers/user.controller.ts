import { Request, Response } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { UserService } from '../services/user.service';

const userService = new UserService();

export class UserController {
  
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const token = await userService.register(req.body);
      res.json(new ApiResponse(200, true, [], { token}));
    } catch (err: any) {
      res
        .status(400)
        .json(new ApiResponse(400, false, [err.message], null));
    }
  }
  
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const token = await userService.login(req.body);
      res.json(new ApiResponse(200, true, [], { token }));
    } catch (err: any) {
      res
        .status(400)
        .json(new ApiResponse(400, false, [err.message], null));
    }
  }
  
  static async me(req: Request & { auth?: { id: string } }, res: Response): Promise<void> {
    try {
      if (!req.auth) throw new Error('No user info');
      console.log(req.auth);
      
      const user = await userService.getUserById(req.auth.id);
      
      res.json(new ApiResponse(200, true, [], user));

    } catch (err: any) {
      res
        .status(400)
        .json(new ApiResponse(400, false, [err.message], null));
    }
  }
}
