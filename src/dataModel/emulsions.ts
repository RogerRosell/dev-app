import { z } from "zod";
import { inferSchema } from './utils';
import { BrandModel } from './brands';

export const EmulsionModel = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Too short").max(20, "Too long"),
  brandId: z.string().nullable(),
  Brand: BrandModel.nullable().optional(),
  iso: z.number(),
  notes: z.string().nullable()
});

export const EmulsionFormSchema = inferSchema(EmulsionModel);

export type TEmulsion = z.infer<typeof EmulsionModel>;