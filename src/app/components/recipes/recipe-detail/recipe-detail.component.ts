import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {ShoppingListService} from "../../../services/shopping-list.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number = 0;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  addIngredientsToList() {
    this.shoppingListService.addIngredientsFromRecipe(this.selectedRecipe.ingredients);
  }
}
