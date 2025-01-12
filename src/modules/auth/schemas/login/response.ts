import { Response } from '@/schemas';
import { z } from 'zod';

const LoginResSchema = z.object({
  access_token: z.string(),
  access_token_type: z.string().default('Bearer'),
  access_token_expire_time: z.number(),
  refresh_token: z.string(),
  refresh_token_type: z.string().default('Bearer'),
  refresh_token_expire_time: z.number(),
});

export const LoginRes = Response.extend({
  data: LoginResSchema.nullable(),
});

export type TLoginRes = z.infer<typeof LoginResSchema>;
