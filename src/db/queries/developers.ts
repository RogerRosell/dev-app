import db from "..";
import { notFound } from "next/navigation";
import { TDeveloper } from "@/dataModel/developers";


//create a prisma query to fetch all brands
export async function fetchDevelopers(): Promise<TDeveloper[]> {
	return await db.developer.findMany({
		include: {
			Brand: true,
		},
		orderBy: [
			{
				name: "desc",
			},
		],
	});
}

//create a prisma query to fetch a brand by id
// export async function fetchBrandById(id: string): Promise<Brand | null> {
// 	const brand = await db.brand.findFirst({
// 		where: {
// 			id,
// 		},
// 	});

// 	if (!brand) {
// 		notFound();
// 	}

// 	return brand;
// }

//create a prisma query to add a new brand
export async function createDeveloper(data: Omit<TDeveloper, "id" | "Brand" | "createdAt">): Promise<TDeveloper> {
	return await db.developer.create({
		data: {
			...data,
		},
	});
}

export async function deleteDeveloper(id: string): Promise<TDeveloper> {
	return await db.developer.delete({
		where: {
			id,
		},
	});
}

//create a prisma query to update a brand
// export async function updateBrand(
// 	id: string,
// 	data: Partial<Omit<Brand, "id" | "createdAt" | "updatedAt">>
// ): Promise<Brand> {
// 	return await db.brand.update({
// 		where: {
// 			id,
// 		},
// 		data: {
// 			...data,
// 		},
// 	});
// }

//create a prisma query to delete a brand
// export async function deleteBrand(id: string): Promise<Brand> {
// 	return await db.brand.delete({
// 		where: {
// 			id,
// 		},
// 	});
// }
