import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';
export class MockData {
    public static Recipes: Recipe[] = [
        {
            "recipeId":1,
            "recipeName": "Nutriboost Smoothie",
            "ingredients": [
                {
                    "id":1,
                    "ingredientName":"1/4 Cup dates",
                    "recipeId":1

                },
                {
                    "id":2,
                    "ingredientName":"1/4 Cup dates 2",
                    "recipeId":1

                }
            ],
            "serveCount": 4,
            "cookingInstructions": "1.Chop banana and dates into small pieces and add to a blender with almond milk."+
            "2.Blend all the ingredients until a thick liquid consistency is reached.",
            "vegetarian": true,
            "createdDate":"25-06-2021 13:02"
        },
        {
            "recipeId":2,
            "recipeName": "Nutriboost Smoothie2",
            "ingredients": [
                {
                    "id":1,
                    "ingredientName":"1/4 Cup dates 3",
                    "recipeId":2

                },
                {
                    "id":2,
                    "ingredientName":"1/4 Cup dates 4",
                    "recipeId":2

                }
            ],
            "serveCount": 4,
            "cookingInstructions": "1.Chop banana and dates into small pieces and add to a blender with almond milk."+"\n"+
            " 2.Blend all the ingredients until a thick liquid consistency is reached.",
            "vegetarian": false,
            "createdDate":"25-06-2021 13:02"
        }

        
        
    ];
}