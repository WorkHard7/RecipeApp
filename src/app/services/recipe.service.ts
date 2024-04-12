import {Injectable} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {BehaviorSubject, map, Observable} from "rxjs";
import {recipes} from "../mocks/recipes";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);

  constructor() {
    this.getRecipesFromLocalStorage();
    this.setRecipesToLocalStorage();
  }

  private getRecipesFromLocalStorage() {
    const recipesLocalStorage = localStorage.getItem('recipes');

    if (recipesLocalStorage) {
      this.recipes.next(JSON.parse(recipesLocalStorage));
    } else {
      this.recipes.next(recipes);
    }
  }

  private setRecipesToLocalStorage() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes.getValue()));
  }

  getRecipes(): Observable<Recipe[]> {
    return this.recipes.pipe(
      map(recipes => recipes || [])
    );
  }

  getRecipe(index: number): Recipe {
    const currentRecipes = this.recipes.getValue();
    return currentRecipes[index];
  }

  addRecipe(recipe: Recipe): void {
    const currentRecipes = this.recipes.getValue();
    currentRecipes.unshift(recipe);

    this.recipes.next(currentRecipes);
    this.updateRecipesLocalStorage(currentRecipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    const currentRecipes = this.recipes.getValue();
    currentRecipes[index] = newRecipe;

    this.recipes.next(currentRecipes);
    this.updateRecipesLocalStorage(currentRecipes);
  }

  deleteRecipe(index: number) {
    const currentRecipes = this.recipes.getValue();
    currentRecipes.splice(index, 1);

    this.recipes.next(currentRecipes);
    this.updateRecipesLocalStorage(currentRecipes);
  }

  private updateRecipesLocalStorage(updatedRecipes: Recipe[]) {
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  }
}
