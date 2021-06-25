import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe =new Recipe();
  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private location:Location) {
  }

  ngOnInit(): void {
    console.log("detail comp")
    var s=this.activatedRoute.snapshot.paramMap.get('id');
    var id =s!=null?s:"";
    console.log('ID : ' + parseInt(id) );
    this.recipeService.getRecipe(parseInt(id))
    .subscribe(recipe =>this.recipe=recipe);
  }
  goBack() {
    this.location.back();
}

}
