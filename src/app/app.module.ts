import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeListComponent} from './components/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipes/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {HeaderComponent} from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownDirective} from './directives/dropdown.directive';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RecipeStartComponent} from './components/recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './components/recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    HeaderComponent,
    DropdownDirective,
    NotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
