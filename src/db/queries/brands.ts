import type { Brand } from "@prisma/client";
import db from "@/db";
import { notFound } from "next/navigation";

//create a prisma query to fetch all brands
export async function fetchBrands(): Promise<Brand[]> {
	return await db.brand.findMany({
		orderBy: [
			{
				name: "desc",
			},
		],
	});
}

//create a prisma query to fetch a brand by id
export async function fetchBrandById(id: string): Promise<Brand | null> {
	const brand = await db.brand.findFirst({
		where: {
			id,
		},
	});

	if (!brand) {
		notFound();
	}

	return brand;
}

//create a prisma query to add a new brand
export async function createBrand(data: Omit<Brand, "id">): Promise<Brand> {
	return await db.brand.create({
		data: {
			...data,
		},
	});
}

//create a prisma query to update a brand
export async function updateBrand(
	id: string,
	data: Partial<Omit<Brand, "id" | "createdAt" | "updatedAt">>
): Promise<Brand> {
	return await db.brand.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}

//create a prisma query to delete a brand
export async function deleteBrand(id: string): Promise<Brand> {
	return await db.brand.delete({
		where: {
			id,
		},
	});
}
