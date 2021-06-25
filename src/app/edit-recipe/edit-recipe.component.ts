import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  formSubmitted = false;

  myForm!: FormGroup;
  recipeId!:FormControl;
  recipeName!: FormControl;
  serveCount!: FormControl;
  vegetarian!: FormControl;
  ingredients!: FormArray;
  cookingInstructions!: FormControl;
  ingredientName!: FormControl;
  constructor(private activatedRoute: ActivatedRoute,private recipeService: RecipeService,private router: Router) { }
  ngOnInit() {
    this.recipeId = new FormControl();
    this.recipeName = new FormControl();
    this.serveCount = new FormControl();
    this.vegetarian = new FormControl();
    this.ingredients = new FormArray([new FormGroup({
      ingredientName:new FormControl('')})]);    
    this.cookingInstructions = new FormControl();
    this.myForm = new FormGroup({
      'recipeId':this.recipeId,
      'recipeName': this.recipeName,
      'serveCount' : this.serveCount,
      'vegetarian' : this.vegetarian,
      'ingredients': this.ingredients,
      'cookingInstructions': this.cookingInstructions
    });
    
    var s=this.activatedRoute.snapshot.paramMap.get('id');
    var id =s!=null?s:"";
    console.log('ID : ' + parseInt(id) );
    this.recipeService.getRecipe(parseInt(id))
    .subscribe(recipe =>{
      for (let ingredients of recipe.ingredients){
        console.log("ingredients "+JSON.stringify(recipe.ingredients))
        this.ingredients.push(new FormGroup({
         
          ingredientName:new FormControl('')}));
      }
      this.ingredients.removeAt(recipe.ingredients.length);
      this.myForm.setValue(recipe);
    });
  }

  
  addIngredient() {
    this.ingredients.push(new FormGroup({
     
      ingredientName:new FormControl('')}));
  }

  deleteIngredient(index: number) {
    if (this.ingredients.length !== 1) {
      this.ingredients.removeAt(index);
    }
    console.log(this.ingredients.length);
  }

  updateRecipe(recipe: Recipe) {
    console.log("id"+recipe.recipeId)
    this.recipeService.updateRecipe(recipe)
    .subscribe(result => {
      this.formSubmitted = true;
      this.router.navigateByUrl('/recipes');
  });
  }

}
