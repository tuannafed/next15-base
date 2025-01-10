import { z } from 'zod';

import { UserResSchema } from '@/schemas/signin/response';
import { PaginationRes } from '@/schemas/template/paginationResponse';
import { CustomResponse, LinkSchema } from '@/schemas/template/response';

const AddAccountResSchema = z.object({
  phone_code_hash: z.string().nullish(),
  username: z.string().nullish(),
  dataId: z.string().nullish(),
});

export const AddAccountRes = CustomResponse.extend({
  data: AddAccountResSchema.nullish(),
});

export const CelerysSchema = z.object({
  id: z.number().nullish(),
  task_id: z.string(),
  account_bot_id: z.number(),
  bot_type: z.string(),
  created_time: z.number().nullish(),
  updated_time: z.number().nullish(),
});

const AccountListResSchema = z.object({
  account: UserResSchema.nullable(),
  celerys: z.array(CelerysSchema),
  created_time: z.number(),
  first_name: z.string().nullable(),
  id: z.number(),
  last_name: z.string().nullable(),
  phone: z.string(),
  proxy: z.string().nullable(),
  status: z.number(),
  username: z.string().nullable(),
});

export const AccountListRes = CustomResponse.extend({
  data: PaginationRes.extend({
    items: z.array(AccountListResSchema),
  })
    .merge(LinkSchema)
    .nullish(),
});

export const StartGameRes = CustomResponse.extend({
  data: z.any().nullish(),
});

export const StopGameRes = CustomResponse.extend({
  data: z.any().nullish(),
});

export type TAccountListRes = z.infer<typeof AccountListResSchema>;
export type TAddAccountRes = z.infer<typeof AddAccountResSchema>;
