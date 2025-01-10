import { z } from 'zod';

const PasswordSchema = z
  .string()
  .min(7, { message: 'Please enter a password with at least 7 characters' })
  .max(15, { message: 'Password must be less than 15 characters.' })
  .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
  .regex(/[a-z]/, 'Password must include at least one lowercase letter')
  .regex(/[0-9]/, 'Password must include at least one number');

export const LoginReqSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: PasswordSchema,
});

export const LoginReq = LoginReqSchema.extend({});

export type TLoginReq = z.infer<typeof LoginReqSchema>;
