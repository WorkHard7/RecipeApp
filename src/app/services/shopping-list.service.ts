import {Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {Subject, BehaviorSubject, Observable, map} from "rxjs";
import {ingredients} from "../mocks/ingredients";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  editingIngredientIndex = new Subject<number>();
  private ingredients: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);

  constructor() {
    this.getIngredientsFromLocalStorage();
    this.setIngredientsToLocalStorage();
  }

  private getIngredientsFromLocalStorage() {
    const ingredientsLocalStorage = localStorage.getItem('ingredients');

    if (ingredientsLocalStorage) {
      this.ingredients.next(JSON.parse(ingredientsLocalStorage));
    } else {
      this.ingredients.next(ingredients);
    }
  }

  addIngredient(newIngredient: Ingredient): void {
    const currentIngredients = this.ingredients.getValue();
    const updatedIngredients = [...currentIngredients, new Ingredient(newIngredient.name, newIngredient.amount)];
    this.ingredients.next(updatedIngredients);

    this.updateIngredientsLocalStorage(updatedIngredients);
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.ingredients.pipe(
      map(ingredients => ingredients || [])
    );
  }

  getIngredient(index: number): Ingredient {
    const currentIngredients = this.ingredients.getValue();
    return currentIngredients[index];
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]): void {
    this.ingredients.next([...ingredients]);
  }

  deleteIngredient(index: number): void {
    const currentIngredients = this.ingredients.getValue();
    currentIngredients.splice(index, 1);

    this.ingredients.next(currentIngredients);
    this.updateIngredientsLocalStorage(currentIngredients);
  }

  updateIngredient(index: number, updatedIngredient: Ingredient): void {
    const currentIngredients = this.ingredients.getValue();

    currentIngredients[index] = updatedIngredient;
    this.ingredients.next(currentIngredients);
    this.updateIngredientsLocalStorage(currentIngredients);
  }

  setIngredientsToLocalStorage(): void {
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients.getValue()));
  }

  updateIngredientsLocalStorage(updatedIngredients: Ingredient[]): void {
    localStorage.setItem('ingredients', JSON.stringify(updatedIngredients))
  }
}
