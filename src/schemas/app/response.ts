import { z } from 'zod';

import { CustomResponse } from '@/schemas/template/response';

const MasterDataValueSchema = z.object({
  id: z.number(),
  name: z.string(),
  avatar: z.string().nullish(),
});

const MasterDataResSchema = z.object({
  master_name: z.string(),
  values: z.array(MasterDataValueSchema),
});

export const MasterDataRes = CustomResponse.extend({
  data: z.array(MasterDataResSchema).nullish(),
});

export type TMasterDataRes = z.infer<typeof MasterDataResSchema>;
export type TMasterDataValue = z.infer<typeof MasterDataValueSchema>;
