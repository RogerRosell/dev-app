import { zfd } from "zod-form-data";
import { z } from "zod";

export const formSchema = zfd.formData({
	name: zfd.text(z.string().min(2, "Too short").max(20, "Too long")),
});

export const DevelopersFormSchema = zfd.formData({
	name: zfd.text(z.string().min(2, "Too short").max(20, "Too long")),
	brand: zfd.text(z.string().min(2, "Too short").max(20, "Too long")),
});

export const EmulsionsFormSchema = zfd.formData({
	name: zfd.text(z.string().min(2, "Too short").max(20, "Too long")),
	brandName: zfd.text(
		z.string().min(2, "Too short").max(20, "Too long").optional()
	),
	iso: zfd.numeric(z.number()),
	notes: zfd.text(z.string().optional()),
});
