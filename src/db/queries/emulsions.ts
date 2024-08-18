import type { Emulsio } from "@prisma/client";
import db from "@/db";
import { notFound } from "next/navigation";

//create a prisma query to fetch all emulsions
export async function fetchEmulsions(): Promise<Emulsio[]> {
	return await db.emulsio.findMany({
		orderBy: [
			{
				brandName: "asc",
			},
		],
	});
}

//create a prisma query to fetch an emulsion by id
export async function fetchEmulsioById(id: string): Promise<Emulsio | null> {
	const emulsio = await db.emulsio.findFirst({
		where: {
			id,
		},
	});

	if (!emulsio) {
		notFound();
	}

	return emulsio;
}

//create a prisma query to add a new emulsion
export async function createEmulsion(
	data: Omit<Emulsio, "id" | "createdAt" | "updatedAt">
): Promise<Emulsio> {
	return await db.emulsio.create({
		data: {
			...data,
		},
	});
}

//create a prisma query to update an emulsion
export async function updateEmulsio(
	id: string,
	data: Partial<Omit<Emulsio, "id" | "createdAt" | "updatedAt">>
): Promise<Emulsio> {
	return await db.emulsio.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}

//create a prisma query to delete an emulsion
export async function deleteEmulsio(id: string): Promise<Emulsio> {
	return await db.emulsio.delete({
		where: {
			id,
		},
	});
}
