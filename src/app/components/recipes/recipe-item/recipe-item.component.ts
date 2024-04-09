import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../../../services/recipe.service";
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent implements OnInit {
  @Input() index: number;
  @Input() carousel: boolean = false;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe(this.index);
  }
}
