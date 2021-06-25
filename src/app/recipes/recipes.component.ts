import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockData } from '../mock-data/mock-recipe-data';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[]=[];
  

  constructor(public recipeService: RecipeService,private router: Router) {     
    
  }

  ngOnInit(): void {
   this.recipeService.getRecipess()
    .subscribe(
      (      recipes: Recipe[]) => this.recipes = recipes
 );
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeService.removeRecipe(recipe).subscribe(
      ()=>{
        this.recipeService.getRecipess()
      .subscribe(
        recipes => {
            this.recipes = recipes;
            console.log("sub");
        }
      );
      }
    );
 }

}
