import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply another test",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/30/0/0182146_hot-wings_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382543453894.jpeg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
