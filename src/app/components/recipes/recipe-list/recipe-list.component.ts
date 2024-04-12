import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeSubscription = this.recipeService.getRecipes()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
