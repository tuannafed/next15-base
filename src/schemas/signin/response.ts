import { z } from 'zod';

import { CustomResponse } from '@/schemas/template/response';

export const UserResSchema = z.object({
  id: z.number(),
  email: z.string(),
  phone: z.string().nullish(),
  username: z.string().nullish(),
  name: z.string().nullish(),
  is_superuser: z.boolean(),
  is_staff: z.boolean(),
  is_multi_login: z.boolean(),
  status: z.number(),
  join_time: z.number(),
  last_login_time: z.number(),
});

const LoginResSchema = z.object({
  access_token: z.string(),
  access_token_type: z.string().default('Bearer'),
  access_token_expire_time: z.number(),
  refresh_token: z.string(),
  refresh_token_type: z.string().default('Bearer'),
  refresh_token_expire_time: z.number(),
  user: UserResSchema,
});

export const LoginRes = CustomResponse.extend({
  data: LoginResSchema.nullable(),
});

export const TokenResSchema = LoginResSchema.omit({ user: true });

export type TLoginRes = z.infer<typeof LoginResSchema>;
export type TUser = z.infer<typeof UserResSchema>;
export type TToken = z.infer<typeof TokenResSchema>;
