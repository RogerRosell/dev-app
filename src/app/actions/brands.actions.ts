"use server";

import { createBrand, fetchBrands, deleteBrand } from "@/db/queries/brands";
import { BrandFormSchema } from '@/dataModel/brands';

export const getAllBrands = async () => {
	const brands = await fetchBrands();
	return brands;
};

export const deleteBrand2 = async (id: string) => {
	try {
		const response = await deleteBrand(id);
		return response;
	} catch (e) {
		console.log(e)
	}

}

export const addBrand2 = async (data: any) => {
	try {
		const { name } = BrandFormSchema.parse(data);
		const newBrand = await createBrand({ name: name });
		return newBrand;
	} catch (e) {
		console.log(e);
	}
};
