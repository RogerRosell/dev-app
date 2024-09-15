
"use server";

import { fetchAgitationfrequencies, createAgitationFrequency, deleteAgitationFrequency } from '@/db/queries/agitationfrequency';
import { AgitationFrequencyFormSchema } from '@/dataModel/agitationFrequency';

export const getAllAgitationfrequencies = async () => {
	const frequencies = await fetchAgitationfrequencies();
	return frequencies;
}

export const addAgitationfrequencies2 = async (data: any) => {
	try {
		const { frequency } = AgitationFrequencyFormSchema.parse(data);
		const newFrequencyAgitation = await createAgitationFrequency({ frequency: frequency});
		return newFrequencyAgitation;
	} catch (e) {
		console.log(e);
	}
}

export const deleteAgitationFrequency2 = async (id: string) => {
	try {
		const response = await deleteAgitationFrequency(id);
		return response;
	} catch(e) {
		console.log(e)
	}
}