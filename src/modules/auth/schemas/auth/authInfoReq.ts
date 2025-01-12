import { z } from 'zod';

export const AuthInfoReqSchema = z.object({
  token: z.string(),
});

export type TAuthInfoReq = z.infer<typeof AuthInfoReqSchema>;
