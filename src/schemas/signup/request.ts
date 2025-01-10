import { z } from 'zod';

const PasswordSchema = z
  .string()
  .min(7, { message: 'Please enter a password with at least 7 characters' })
  .max(15, { message: 'Password must be less than 15 characters.' })
  .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
  .regex(/[a-z]/, 'Password must include at least one lowercase letter')
  .regex(/[0-9]/, 'Password must include at least one number');

export const SignUpReqSchema = z
  .object({
    username: z.string().min(1, {
      message: 'Please enter username.',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    phone: z.string().min(1, {
      message: 'Please enter your phone number.',
    }),
    password: PasswordSchema,
    passwordConfirmation: PasswordSchema,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match.',
    path: ['passwordConfirmation'],
  });

export const SignUpReq = z.object({
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
});

export type TSignUpReq = z.infer<typeof SignUpReqSchema>;
