import { z } from "zod";
import { inferSchema } from './utils';
import { BrandModel } from './brands';

export const DeveloperModel = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Too short").max(20, "Too long"),
  brandId: z.string().nullable(),
  Brand: BrandModel.nullable().optional(),
});

export const DeveloperFormSchema = inferSchema(DeveloperModel);

export type TDeveloper = z.infer<typeof DeveloperModel>;