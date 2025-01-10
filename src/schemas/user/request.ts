import { z } from 'zod';

import { CustomRequest } from '@/schemas/template/request';

export const UserListReq = CustomRequest.extend({
  search_text: z.string().optional(),
  status_id: z.string().optional(),
  role_id: z.string().optional(),
});

export const AddUserReqSchema = z.object({
  country_code: z.string().optional(),
  phone: z.string(),
  code: z.string().optional(),
  phone_code_hash: z.string().optional(),
  password: z.string().optional(),
});

export const AddUserReq = AddUserReqSchema.extend({});

export type TUserListReq = z.infer<typeof UserListReq>;
export type TAddUserReq = z.infer<typeof AddUserReqSchema>;
