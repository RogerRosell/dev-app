import { z } from "zod";
import { inferSchema } from './utils';

export const AgitationFrequencyModel = z.object({
  id: z.string().optional(),
  frequency: z.string()
});

export const AgitationFrequencyFormSchema = inferSchema(AgitationFrequencyModel);

export type TAgitationFrequency = z.infer<typeof AgitationFrequencyModel>;