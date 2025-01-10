import { z } from 'zod';

import { CustomRequest } from '@/schemas/template/request';

export const AccountListReq = CustomRequest.extend({
  search_text: z.string().optional(),
  status_id: z.string().optional(),
});

export const AddAccountReqSchema = z.object({
  country_code: z.string().optional(),
  phone: z.string(),
  code: z.string().optional(),
  phone_code_hash: z.string().optional(),
  password: z.string().optional(),
});

export const StartGameReqSchema = z.object({
  session_name: z.string(),
  bot_type: z.string(),
});

export const StopGameReqSchema = z.object({
  session_name: z.string(),
  task_id: z.string(),
});

export const AddAccountReq = AddAccountReqSchema.extend({});
export const StartGameReq = StartGameReqSchema.extend({});
export const StopGameReq = StopGameReqSchema.extend({});

export type TAccountListReq = z.infer<typeof AccountListReq>;
export type TAddAccountReq = z.infer<typeof AddAccountReqSchema>;
export type TStartGameReq = z.infer<typeof StartGameReqSchema>;
export type TStopGameReq = z.infer<typeof StopGameReqSchema>;
