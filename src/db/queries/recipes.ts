import type { Recipe } from "@prisma/client";
import db from "@/db";
import { notFound } from "next/navigation";

export async function fetchRecipes(): Promise<Recipe[]> {
	return await db.recipe.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	});
}

export async function fetchRecipeById(id: string): Promise<Recipe | null> {
	const recipe = await db.recipe.findFirst({
		where: {
			id,
		},
		include: {
			agitation: true,
			Development: true,
		},
	});

	if (!recipe) {
		notFound();
	}

	return recipe;
}

// Create a prisma query to add a new Recipe
export async function createRecipe(
	data: Omit<Recipe, "id" | "createdAt" | "updatedAt">
): Promise<Recipe> {
	return await db.recipe.create({
		data: {
			...data,
		},
	});
}

// Update a Recipe
export async function updateRecipe(
	id: string,
	data: Partial<Omit<Recipe, "id" | "createdAt" | "updatedAt">>
): Promise<Recipe> {
	return await db.recipe.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	});
}

// Delete a Recipe
export async function deleteRecipe(id: string): Promise<Recipe> {
	return await db.recipe.delete({
		where: {
			id,
		},
	});
}
