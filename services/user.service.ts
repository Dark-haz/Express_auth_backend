import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserDTO } from '../dtos/user.dto';
import { UserRepository } from '../repository/user.repository';
import { SignOptions } from 'jsonwebtoken';
import { IUser } from '../models/user.model';

interface JwtPayload {
  user: { id: string };
}

export class UserService {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  async register(data: { username: string; password: string }): Promise<{ token: string; user: UserDTO }> {
    const existing = await this.userRepo.findByUsername(data.username);
    if (existing) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await this.userRepo.create({ username: data.username, password: hashedPassword });

    const token = this.generateToken(newUser._id.toString());
    const userDto = new UserDTO(newUser);
  
    return { token, user: userDto };
  }

  async login(data: { username: string; password: string }): Promise<{ token: string; user: UserDTO }> {
    const user = await this.userRepo.findByUsername(data.username);
    if (!user) throw new Error('Invalid credentials');

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) throw new Error('Invalid credentials');

    const token = this.generateToken(user._id.toString());
    const userDto = new UserDTO(user);
  
    return { token, user: userDto };
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user = await this.userRepo.findById(id);
    if (!user) throw new Error('User not found');

    return new UserDTO(user);
  }


  generateToken(userId: string, expiresIn: any = '1h'): string {
    const secret = process.env.JWT_SECRET as string;
  
    // Basic format validation: must match "number + unit" (e.g., 1h, 30m, 7d)
    const isValidFormat = /^(\d+(\.\d+)?)([smhd])$/.test(expiresIn); // s = seconds, m = minutes, etc.
  
    if (!isValidFormat) {
      throw new Error('Invalid token expiration format. Use formats like "1h", "30m", "7d".');
    }
  
    const payload: JwtPayload = { user: { id: userId } };
    return jwt.sign(payload, secret, { expiresIn : expiresIn });
  }
  
}
