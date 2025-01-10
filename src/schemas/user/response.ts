import { z } from 'zod';

import { PaginationRes } from '@/schemas/template/paginationResponse';
import { CustomResponse, LinkSchema } from '@/schemas/template/response';

export const RoleResSchema = z.object({
  name: z.string(),
  data_scope: z.number(),
  status: z.number(),
  remark: z.nullable(z.string()),
  id: z.number(),
  created_time: z.number(),
  updated_time: z.number(),
});

export const GameResSchema = z.object({
  name: z.string(),
  status: z.number(),
  id: z.number(),
  created_time: z.number(),
  updated_time: z.number(),
});

const UserListResSchema = z.object({
  email: z.string().nullish(),
  games: z.array(GameResSchema).nullish(),
  id: z.number(),
  is_multi_login: z.boolean().nullish(),
  is_staff: z.boolean().nullish(),
  is_superuser: z.boolean().nullish(),
  join_time: z.number().nullish(),
  last_login_time: z.number().nullish(),
  phone: z.string().nullish(),
  roles: z.array(RoleResSchema).nullish(),
  status: z.number(),
  username: z.string().nullish(),
});

const AddUserResSchema = z.object({
  phone_code_hash: z.string().nullish(),
  username: z.string().nullish(),
  dataId: z.string().nullish(),
});

export const AddUserRes = CustomResponse.extend({
  data: AddUserResSchema.nullish(),
});

export const UserListRes = CustomResponse.extend({
  data: PaginationRes.extend({
    items: z.array(UserListResSchema),
  })
    .merge(LinkSchema)
    .nullish(),
});

export type TUserListRes = z.infer<typeof UserListResSchema>;
export type TAddUserRes = z.infer<typeof AddUserResSchema>;
