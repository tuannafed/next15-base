import { z } from 'zod';

import { Response } from '@/schemas';

const RefreshToken = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const RefreshTokenRes = Response.extend({
  data: RefreshToken.optional(),
});
