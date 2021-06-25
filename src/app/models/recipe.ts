import { Ingredient } from "./ingredient";

export class Recipe {
    recipeId!: number;
    recipeName!: string;
    vegetarian!: boolean;
    ingredients!: Ingredient[];
    serveCount!: number;
    cookingInstructions!: string;
    createdDate!: string;
    constructor() {
    }
}