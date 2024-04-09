import {Injectable} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Strawberry pie',
      'Tasty pie with fresh strawberries',
      'https://as2.ftcdn.net/v2/jpg/01/13/04/31/1000_F_113043158_EGwotrzOJVglUGzoepfQTYfmmA6TuhRz.jpg',
      [
        new Ingredient('strawberries', 30),
        new Ingredient('white sugar', 1),
        new Ingredient('heavy whipping cream', 0.5),
      ]
    ),
    new Recipe(
      'A delicious pizza',
      'A pizza with chopped pepper in board cookware',

      'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      [
        new Ingredient('chicken meat', 1),
        new Ingredient('onion', 0.5),
        new Ingredient('pizza sauce', 1),
        new Ingredient('mozzarella and parmesan', 1),
      ]
    ),
    new Recipe(
      'Italian pasta',
      'A delicious italian pasta',
      'https://img.freepik.com/free-photo/authentic-italian-pasta_24972-2334.jpg?w=900&t=st=1711486561~exp=' +
      '1711487161~hmac=3bc7ad3cbda14ca06d13fb4f6316945870427af6a6fe21ec45bd09a2b8784446',
      [
        new Ingredient('pasta', 1),
        new Ingredient('garlic', 5),
        new Ingredient('extra-virgin olive oil', 1),
        new Ingredient('parmesan', 1)
      ]
    ),
    new Recipe(
      'Fruit cake',
      'Fruit cake with chocolate chips and blueberries',
      'https://img.freepik.com/free-photo/fruit-cake-with-chocolate-chips-blueberries_176474-2965.jpg?t=st=1711486734~exp=' +
      '1711490334~hmac=1ac411f8f20c7b313caf97db72a3d0ec70320b456579878572ade783350ad9aa&w=900',
      [
        new Ingredient('blueberries', 20),
        new Ingredient('dark chocolate', 2),
        new Ingredient('milk', 1),
        new Ingredient('sugar', 1),
        new Ingredient('baking powder', 2)
      ]
    ),
    new Recipe(
      'Berries pie',
      'Sweet tart with berries on grey wooden table',
      'https://as1.ftcdn.net/v2/jpg/01/78/61/66/1000_F_178616625_e1hkLetsp3jynjkmfD4Pj9xYX58SHOVl.jpg',
      [
        new Ingredient('baking powder', 2),
        new Ingredient('berries', 25),
        new Ingredient('strawberries', 20),
        new Ingredient('whipped cream', 1)
      ]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
