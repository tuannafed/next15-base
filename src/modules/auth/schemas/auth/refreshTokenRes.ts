import { Response } from '@/schemas';
import { z } from 'zod';

const RefreshToken = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const RefreshTokenRes = Response.extend({
  data: RefreshToken.optional(),
});
