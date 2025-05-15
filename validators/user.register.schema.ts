import { z } from 'zod';

export const userRegisterSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
}).strict();

export type AuthDTO = z.infer<typeof userRegisterSchema>;
