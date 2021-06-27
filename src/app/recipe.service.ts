import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { MockData } from './mock-data/mock-recipe-data';
import { Recipe } from './models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesUrl = 'https://localhost:8082/';
  recipes: Recipe[] = [];
  constructor(private httpClient: HttpClient) {
    this.recipes = MockData.Recipes;
  }
  getRecipess():  Observable<Recipe[] >{
    return this.httpClient.get<Recipe[]>(this.recipesUrl+"recipies",
    { headers: { authorization: this.createBasicAuthToken("user", "pass") } });
  }
  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }
  getRecipe(id: number): Observable<Recipe> {
    let recipe=this.recipes.find( p => p.recipeId === id)
    recipe=recipe!=undefined?recipe:new Recipe();
    return this.httpClient.get<Recipe>(this.recipesUrl+"recipie/"+id,
    { headers: { authorization: this.createBasicAuthToken("user", "pass") } });
  }
  removeRecipe(recipe: Recipe) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      authorization: this.createBasicAuthToken("user", "pass") })
    };
    const id = typeof recipe === 'number' ? recipe : recipe.recipeId;
    const url = `${this.recipesUrl}recipie/${id}`;
    console.log(url);
    return this.httpClient.delete<Recipe>(url, httpOptions);
  }

  addRecipe(recipe: Recipe) {   
    console.log("add recipe"+recipe);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      authorization: this.createBasicAuthToken("user", "pass") })
    };
    return this.httpClient.post(this.recipesUrl+"recipie/add", recipe, httpOptions)
  }
  updateRecipe(recipe: Recipe) {  
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      authorization: this.createBasicAuthToken("user", "pass") })
    };
    const url = `${this.recipesUrl}recipie/update/${recipe.recipeId}`;
    return this.httpClient.put(url, recipe, httpOptions)
  }
}
