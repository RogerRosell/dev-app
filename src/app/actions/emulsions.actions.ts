"use server";

import { fetchEmulsions, createEmulsion, deleteEmulsion } from '@/db/queries/emulsions';
import { EmulsionFormSchema } from '@/dataModel/emulsions';

export const getAllEmulsions = async () => {
	try {
		const emulsions = await fetchEmulsions();
		return emulsions;
	} catch (error) {
		return(error);
	}
}

export const addEmulsion = async (data: any) => {
	try {
		const { name, iso, notes, brandId } = EmulsionFormSchema.parse(data);
		const newEmulsion = await createEmulsion({ name: name, iso: iso, notes: notes, brandId: brandId });
		return newEmulsion;
	} catch (e) {
		console.log(e);
	}
}

export const deleteEmulsion2 = async (id: string) => {
	try {
		const response = await deleteEmulsion(id);
		return response;
	} catch(e) {
		console.log(e)
	}
}