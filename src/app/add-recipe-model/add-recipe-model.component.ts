import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe-model',
  templateUrl: './add-recipe-model.component.html',
  styleUrls: ['./add-recipe-model.component.css']
})
export class AddRecipeModelComponent implements OnInit {

  formSubmitted = false;

  myForm!: FormGroup;
  recipeName!: FormControl;
  serveCount!: FormControl;
  vegetarian!: FormControl;
  ingredients!: FormArray;
  cookingInstructions!: FormControl;
  ingredientName!: FormControl;
  constructor(private recipeService: RecipeService,private router: Router) { }
  ngOnInit() {
    this.recipeName = new FormControl();
    this.serveCount = new FormControl();
    this.vegetarian = new FormControl();
    this.ingredients = new FormArray([new FormGroup({ingredientName:new FormControl('')})]);    
    this.cookingInstructions = new FormControl();
    this.myForm = new FormGroup({
      'recipeName': this.recipeName,
      'serveCount' : this.serveCount,
      'vegetarian' : this.vegetarian,
      'ingredients': this.ingredients,
      'cookingInstructions': this.cookingInstructions
    });
  }

  get ingredientList(): FormArray {
    return this.myForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredients.push(new FormGroup({ingredientName:new FormControl('')}));
  }

  deleteIngredient(index: number) {
    if (this.ingredients.length !== 1) {
      this.ingredients.removeAt(index);
    }
   
  }

  addRecipe(recipe: Recipe) {
    console.log("recipe2 "+recipe);
    const date = moment();
    let dateInFormat = date.format('DD-MM-yyyy HH:mm');

    recipe.createdDate=dateInFormat;
    console.log("dateInFormat "+dateInFormat);
    console.log("recipe2 "+JSON.stringify(recipe));
    this.recipeService.addRecipe(recipe)
    .subscribe(result => {
      this.formSubmitted = true;
      this.router.navigateByUrl('/recipes');
  });
  }

}


