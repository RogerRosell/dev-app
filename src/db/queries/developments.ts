import type { Development } from "@prisma/client";
import db from "@/db";
import { notFound } from "next/navigation";

export async function fetchDevelopments(): Promise<Development[]> {
	return await db.development.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	});
}

export async function fetchDevelopmentById(
	id: string
): Promise<Development | null> {
	const development = await db.development.findFirst({
		where: {
			id,
		},
		include: {
			recipe: true,
			rodet: true,
		},
	});

	if (!development) {
		notFound();
	}

	return development;
}

// Create a prisma query to add a new Development
export async function createDevelopment(
	data: Omit<Development, "id" | "createdAt" | "updatedAt">
): Promise<Development> {
	return await db.development.create({
		data: {
			...data,
		},
	});
}

// Update a Development
export async function updateDevelopment(
	id: string,
	data: Partial<Omit<Development, "id" | "createdAt" | "updatedAt">>
): Promise<Development> {
	return await db.development.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}

// Delete a Development
export async function deleteDevelopment(id: string): Promise<Development> {
	return await db.development.delete({
		where: {
			id,
		},
	});
}
