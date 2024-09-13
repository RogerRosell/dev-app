"use server";

import { fetchDevelopers,createDeveloper, deleteDeveloper } from '@/db/queries/developers';
import { DeveloperFormSchema } from '@/dataModel/developers';

export const getAllDevelopers = async () => {
	const developers = await fetchDevelopers();
	return developers;
}

export const addDeveloper = async (data: any) => {
	try {
		const { name, brandId } = DeveloperFormSchema.parse(data);
		const newDeveloper = await createDeveloper({ name: name, brandId: brandId });
		return newDeveloper;
	} catch (e) {
		console.log(e);
	}
}

export const deleteDeveloper2 = async (id: string) => {
	try {
		const response = await deleteDeveloper(id);
		return response;
	} catch(e) {
		console.log(e)
	}
}