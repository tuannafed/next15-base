import { z } from 'zod';

import { Response } from '@/schemas';

const LoginSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  image: z.string().url(),
});

export const LoginResSchema = Response.extend({
  data: LoginSchema.nullable(),
});

export type TLoginRes = z.infer<typeof LoginSchema>;
