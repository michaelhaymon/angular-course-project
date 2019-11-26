import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/30/0/0182146_hot-wings_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382543453894.jpeg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
