import { z } from "zod";
import { inferSchema } from './utils';
import { AgitationFrequencyModel } from './agitationFrequency';

export const AgitationModel = z.object({
  id: z.string().optional(),
  initial: z.string().nullable().optional(),
  turns: z.number().nullable().optional(),
  frequencyId: z.string(),
  Frequency: AgitationFrequencyModel,
});

export const AgitationFormSchema = inferSchema(AgitationModel);

export type TAgitation = z.infer<typeof AgitationModel>;