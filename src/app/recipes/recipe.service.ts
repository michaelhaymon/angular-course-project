import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fried Shrimp',
      'Cockroaches of the Coast!',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Shrimp', 12),
        new Ingredient('Green Pepper', 1),
        new Ingredient('Seasoning', 1)
      ]
    ),
    new Recipe(
      'Hot Wings',
      'Good Beer and Good Friends.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9vg5UhFq_sQsrpScxAU51WAfGSYvqnaq74ncML_U7wkRAAB7Pw&s',
      [
        new Ingredient('Bone-in Chicken Wing', 10),
        new Ingredient('Hot Sauce', 1),
        new Ingredient('Carrot', 5),
        new Ingredient('Celery', 5)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
