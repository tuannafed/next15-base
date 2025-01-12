import { z } from 'zod';

export const LoginReqSchema = z.object({
  username: z.string().min(1, 'Please enter username.'),
  password: z.string().min(7, 'Please enter a password with at least 7 characters'),
  // .max(15, { message: 'Password must be less than 15 characters.' })
  // .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
  // .regex(/[a-z]/, 'Password must include at least one lowercase letter')
  // .regex(/[0-9]/, 'Password must include at least one number'),
});

export const LoginReq = LoginReqSchema.extend({
  expiresInMins: z.number().int().positive().default(5),
});

export type TLoginReq = z.infer<typeof LoginReqSchema>;
