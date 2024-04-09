import {Component, DestroyRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Ingredient} from "../../../models/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.scss'
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') shoppingListForm: NgForm;
  startedEditingSubscription: Subscription;
  editedIngredientIndex: number;
  editMode: boolean = false;
  editedIngredient: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private destroyRef: DestroyRef
  ) {
  }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.editingIngredientIndex
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        })
      });

    this.destroyRef.onDestroy(() => this.startedEditingSubscription.unsubscribe());
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedIngredientIndex,
        new Ingredient(value.name, value.amount))
    } else {
      this.shoppingListService.addNewIngredient({
        name: value.name,
        amount: value.amount
      })
    }

    this.editMode = false;
    form.resetForm();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }
}
