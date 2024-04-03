import {Injectable, OnDestroy} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {RecipeService} from "./recipe.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnDestroy {
  selectedRecipeSubscription: Subscription;
  private ingredients: Ingredient[] = [
    new Ingredient('Strawberry', 5),
    new Ingredient('Berries', 2),
    new Ingredient('Flour', 2),
  ];

  constructor(private recipeService: RecipeService) {
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(new Ingredient(newIngredient.name, newIngredient.amount));
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  ngOnDestroy() {
    this.selectedRecipeSubscription.unsubscribe();
  }
}
