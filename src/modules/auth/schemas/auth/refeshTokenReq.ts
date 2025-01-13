import { z } from 'zod';

export const RefreshTokenReqSchema = z.object({
  refreshToken: z.string(),
});

export const RefreshTokenReq = RefreshTokenReqSchema.extend({});
