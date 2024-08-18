import db from "@/db";
import { notFound } from "next/navigation";
import { TDeveloper } from '@/dataModel/developers';


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
export async function fetchDeveloperById(id: string): Promise<TDeveloper | null> {
	const developer = await db.developer.findFirst({
		where: {
			id,
		},
	});

	if (!developer) {
		notFound();
	}

	return developer;
}

// export async function createDeveloper(data: Omit<TDeveloper, "id">): Promise<TDeveloper> {
// 	return await db.developer.create({
// 		data: {
// 			...data,
// 		},
// 	});
// }

// //create a prisma query to update a brand
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
export async function deleteDeveloper(id: string): Promise<TDeveloper> {
	return await db.developer.delete({
		where: {
			id,
		},
	});
}
