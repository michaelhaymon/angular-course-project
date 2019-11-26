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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9vg5UhFq_sQsrpScxAU51WAfGSYvqnaq74ncML_U7wkRAAB7Pw&s'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
