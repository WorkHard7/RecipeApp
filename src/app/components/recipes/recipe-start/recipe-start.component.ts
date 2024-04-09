import {AfterViewInit, Component} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrl: './recipe-start.component.scss'
})
export class RecipeStartComponent implements AfterViewInit {
  message: string[] = [
    'For more details please select a recipe!',
    'Or add a new one...'
  ];
  typed: Typed;
  options = {
    strings: this.message,
    typeSpeed: 40,
    smartBackspace: true,
    loop: true,
    backDelay: 3000
  };

  ngAfterViewInit() {
    this.typed = new Typed('#typed-text', this.options);
  }
}
