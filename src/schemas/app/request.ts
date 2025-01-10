import { z } from 'zod';

export const MasterDataReqSchema = z.object({
  list_master_name: z.array(z.string()),
});

export const MasterDataReq = MasterDataReqSchema.extend({});

export type TMasterDataReq = z.infer<typeof MasterDataReqSchema>;
