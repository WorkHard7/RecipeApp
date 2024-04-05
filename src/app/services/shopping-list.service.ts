import {Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Strawberry', 5),
    new Ingredient('Berries', 2),
    new Ingredient('Flour', 2),
  ];

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(new Ingredient(newIngredient.name, newIngredient.amount));
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
