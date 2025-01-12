import { z } from 'zod';

import { Response } from '@/schemas';

const RegisterResSchema = z.object({});

export const RegisterRes = Response.extend({
  data: RegisterResSchema.nullable(),
});

export type TRegisterRes = z.infer<typeof RegisterResSchema>;
