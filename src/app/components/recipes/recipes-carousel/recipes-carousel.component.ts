import {AfterViewInit, Component, OnInit} from '@angular/core';
import Glide from '@glidejs/glide';
import {Recipe} from "../../../models/recipe.model";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipes-carousel',
  templateUrl: './recipes-carousel.component.html',
  styleUrl: './recipes-carousel.component.scss'
})
export class RecipesCarouselComponent implements OnInit, AfterViewInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  ngAfterViewInit(): void {
    new Glide('.glide', {
      type: 'carousel', // Specify carousel type
      autoplay: 5000,   // Autoplay interval in milliseconds
      hoverpause: true, // Pause autoplay on hover
      perView: 4,       // Number of slides visible at once
      animationDuration: 500,
      animationTimingFunc: 'ease-in-out',
      breakpoints: {
        800: { // up to 800px we show 2 pics
          perView: 2
        },
        1100: { // up to we show 3 pics
          perView: 3
        }
      },
      controls: {
        prev: '.glide__control--prev',
        next: '.glide__control--next'
      }
    }).mount({});
  }
}
