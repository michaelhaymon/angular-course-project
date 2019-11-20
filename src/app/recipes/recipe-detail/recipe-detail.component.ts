import { Component, OnInit, Input, Output } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  dropdownState: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }
}
