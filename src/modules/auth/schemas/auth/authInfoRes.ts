import { Response } from '@/schemas';
import { z } from 'zod';

export const AuthInfoResSchema = z.object({
  id: z.number(),
  email: z.string(),
  phone: z.string().nullish(),
  username: z.string().nullish(),
  name: z.string().nullish(),
  status: z.number(),
});

export const AuthInfoRes = Response.extend({
  data: AuthInfoResSchema,
});

export type TAuthInfo = z.infer<typeof AuthInfoResSchema>;
