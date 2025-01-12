import { Response } from '@/schemas';
import { z } from 'zod';

const RegisterResSchema = z.object({});

export const RegisterRes = Response.extend({
  data: RegisterResSchema.nullable(),
});

export type TRegisterRes = z.infer<typeof RegisterResSchema>;
