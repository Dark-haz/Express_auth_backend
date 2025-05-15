import { z } from 'zod';

export const userLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
}).strict();

export type AuthDTO = z.infer<typeof userLoginSchema>;
