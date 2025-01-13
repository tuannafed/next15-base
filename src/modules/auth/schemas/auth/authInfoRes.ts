import { z } from 'zod';

import { Response } from '@/schemas';

export const AuthInfoResSchema = z.object({
  id: z.number(),
  accessToken: z.string(),
  refreshToken: z.string(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  image: z.string().url(),
});

export const AuthInfoRes = Response.extend({
  data: AuthInfoResSchema,
});

export type TAuthInfo = z.infer<typeof AuthInfoResSchema>;
