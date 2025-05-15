import { IUser, IUserDocument } from '../models/user.model';

export class UserDTO {
  id: string;
  username: string;

  constructor(user: IUserDocument) {
    this.id = user._id.toString();
    this.username = user.username;
  }
}
