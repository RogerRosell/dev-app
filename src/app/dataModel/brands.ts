import { z } from "zod";
import { inferSchema } from './utils';

export const BrandModel = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Too short").max(20, "Too long")
});

export const BrandFormSchema = inferSchema(BrandModel);

export type TBrand = z.infer<typeof BrandModel>;