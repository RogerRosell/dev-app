import type { Agitation } from "@prisma/client";
import db from "@/db";
import { notFound } from "next/navigation";

//create a prisma query to fetch all agitations
export async function fetchAgitations(): Promise<Agitation[]> {
	return await db.agitation.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	});
}

//create a prisma query to fetch an agitation by id
export async function fetchAgitationById(
	id: string
): Promise<Agitation | null> {
	const agitation = await db.agitation.findFirst({
		where: {
			id,
		},
	});

	if (!agitation) {
		notFound();
	}

	return agitation;
}

//create a prisma query to add a new agitation
export async function createAgitation(
	data: Omit<Agitation, "id" | "createdAt" | "updatedAt">
): Promise<Agitation> {
	return await db.agitation.create({
		data: {
			...data,
		},
	});
}

//create a prisma query to update an agitation
export async function updateAgitation(
	id: string,
	data: Partial<Omit<Agitation, "id" | "createdAt" | "updatedAt">>
): Promise<Agitation> {
	return await db.agitation.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}

//create a prisma query to delete an agitation
export async function deleteAgitation(id: string): Promise<Agitation> {
	return await db.agitation.delete({
		where: {
			id,
		},
	});
}
