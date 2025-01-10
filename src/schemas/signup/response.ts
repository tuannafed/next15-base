import { z } from 'zod';

import { CustomResponse } from '@/schemas/template/response';

const SignUpResSchema = z.object({});

export const SignUpRes = CustomResponse.extend({
  data: SignUpResSchema.nullable(),
});

export type TSignUpRes = z.infer<typeof SignUpResSchema>;
