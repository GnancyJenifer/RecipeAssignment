import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() removed = new EventEmitter();
  @Output() edited = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.removed.emit(this.recipe);
  }
  edit(){
    console.log("Edit Method")
  }

}
