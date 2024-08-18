import type { Rodet } from "@prisma/client";
import db from "@/db";

export async function fetchRodets(): Promise<Rodet[]> {
	return await db.rodet.findMany({
		include: {
			emulsion: true,
			exposure: true,
			development: true,
		},
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	});
}

// create a prisma query to fetch the last Rodet by createdAt
export async function fetchLastRodet(): Promise<Rodet | null> {
	return await db.rodet.findFirst({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	});
}

export async function fetchRodetById(id: string): Promise<Rodet | null> {
	const rodet = await db.rodet.findFirst({
		where: {
			id,
		},
		include: {
			emulsion: true,
			exposure: true,
			development: true,
		},
	});

	if (!rodet) {
		null;
	}

	return rodet;
}

//creates empty rodet
export async function createRodet(): Promise<Rodet> {
	return await db.rodet.create({
		data: {},
	});
}

// Update a Rodet
export async function updateRodet(
	id: string,
	data: Partial<Omit<Rodet, "id" | "createdAt" | "updatedAt">>
): Promise<Rodet> {
	return await db.rodet.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}
// Delete a Rodet
export async function deleteRodet(id: string): Promise<Rodet> {
	return await db.rodet.delete({
		where: {
			id,
		},
	});
}
