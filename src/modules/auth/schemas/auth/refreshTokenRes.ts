import { z } from 'zod';

import { Response } from '@/schemas';

export const RefreshTokenResSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const RefreshTokenRes = Response.extend({
  data: RefreshTokenResSchema,
});

export type TRefreshTokenRes = z.infer<typeof RefreshTokenResSchema>;
