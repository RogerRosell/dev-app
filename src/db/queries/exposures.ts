import type { Exposure } from "@prisma/client";
import db from "@/db";
import { notFound } from "next/navigation";

export async function fetchExposures(): Promise<Exposure[]> {
	return await db.exposure.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	});
}

export async function fetchExposureById(id: string): Promise<Exposure | null> {
	const exposure = await db.exposure.findFirst({
		where: {
			id,
		},
		include: {
			rodet: true,
		},
	});

	if (!exposure) {
		notFound();
	}

	return exposure;
}

// Create a prisma query to add a new Exposure
export async function createExposure(
	data: Omit<Exposure, "id" | "createdAt" | "updatedAt">
): Promise<Exposure> {
	return await db.exposure.create({
		data: {
			...data,
		},
	});
}

// Update a Exposure
export async function updateExposure(
	id: string,
	data: Partial<Omit<Exposure, "id" | "createdAt" | "updatedAt">>
): Promise<Exposure> {
	return await db.exposure.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}

// Delete a Exposure
export async function deleteExposure(id: string): Promise<Exposure> {
	return await db.exposure.delete({
		where: {
			id,
		},
	});
}
