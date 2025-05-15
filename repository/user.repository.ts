
import User, { IUser, IUserDocument } from '../models/user.model';

export class UserRepository {

  async findByUsername(username: string): Promise<IUserDocument | null> {
    return User.findOne({ username });
  }

  async findById(id: string): Promise<IUserDocument | null> {
    return User.findById(id);
  }

  async create(userData: { username: string; password: string }): Promise<IUserDocument> {
    const user = new User(userData);
    return user.save();
    
  }
}
