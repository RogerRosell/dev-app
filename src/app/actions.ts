"use server";

// import { fetchDevelopers,createDeveloper, deleteDeveloper } from '@/db/queries/developers';
import { createBrand, fetchBrands, deleteBrand } from "@/db/queries/brands";
import { fetchEmulsions, createEmulsion, deleteEmulsion } from '@/db/queries/emulsions';
// import { deleteDeveloper } from '@/db/queries/developers';
// import { createRodet } from "@/db/queries/rodets";
import { BrandFormSchema } from '@/dataModel/brands';
// import { DeveloperFormSchema } from '@/dataModel/developers';
import { EmulsionFormSchema } from '@/dataModel/emulsions';
// import { ZodError } from "zod";
// import { fetchDevelopers } from '@/db/queries/developers';

// import { addEmulsion } from '../../.next/server/app/developers/page';
import { getAllDevelopers, addDeveloper, deleteDeveloper2 } from './develpers.actions';

export { getAllDevelopers, addDeveloper, deleteDeveloper2 }

export type State =
	| {
			status: "success";
			message: string;
	  }
	| {
			status: "error";
			message: string;
			errors?: Array<{
				path: string;
				message: string;
			}>;
	  }
	| null;

export const getFormSchema = (formType: String) => {};

// export const getAllEmulsions = async () => {
// 	const emulsions = fetchEmulsions();
// 	return emulsions;
// };

// export const addEmulsion = async (data: any) => {
// 	console.log("data from addEmulsion", data);
// 	try {
// 		const { name, iso, notes, brandName } = EmulsionsFormSchema.parse(data);
// 		const newEmulsion = await createEmulsion({
// 			name: name,
// 			iso: iso,
// 			notes: notes || "",
// 			brandName: brandName as string,
// 		});
// 		console.log("newEmulsion", newEmulsion);
// 		return newEmulsion;
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

// export const creaNouRodet = async () => {
// 	const nouRodet = await createRodet();
// 	return nouRodet.id;
// };

// export async function shortenUrl(url: string): Promise<string> {
// 	const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
// 	const data = await response.text();
// 	return data;
// }

// export const getAllDevelopers = async () => {
// 	const developers = await fetchDevelopers();
// 	return developers;
// }

// export const deleteDeveloper2 = async (id: string) => {
// 	try {
// 		const response = await deleteDeveloper(id);
// 		return response;
// 	} catch(e) {
// 		console.log(e)
// 	}
// }

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

// export const getAllDevelopers = async () => {
// 	const developers = await fetchDevelopers();
// 	return developers;
// }

// export const addDeveloper2 = async (data: any) => {
// 	try {
// 		const { name, brandId } = DeveloperFormSchema.parse(data);
// 		const newDeveloper = await createDeveloper({ name: name, brandId: brandId });
// 		return newDeveloper;
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

// export const deleteDeveloper2 = async (id: string) => {
// 	try {
// 		const response = await deleteDeveloper(id);
// 		return response;
// 	} catch(e) {
// 		console.log(e)
// 	}
// }


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

// export const addBrand = async (
// 	prevState: State | null,
// 	data: FormData
// ): Promise<State> => {
// 	try {
// 		const { name } = formSchema.parse(data);
// 		const newBrand = await createBrand({ name: name });
// 		console.log("newBrand", newBrand);
// 		return {
// 			status: "success",
// 			message: `Brand, ${name} successfully added!`,
// 		};
// 	} catch (e) {
// 		if (e instanceof ZodError) {
// 			return {
// 				status: "error",
// 				message: "Invalid form data",
// 				errors: e.issues.map((issue) => ({
// 					path: issue.path.join("."),
// 					message: `Server validation: ${issue.message}`,
// 				})),
// 			};
// 		}
// 		return {
// 			status: "error",
// 			message: "Something went wrong. Please try again.",
// 		};
// 	}
// };
