import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food list';
  inventory = ['beef', 'potatoes', 'carrots', 'peas', 'onions', 'flour', 'tomato sauce', 'seasoning'];
  newFood = '';
  addToFoodList() {
    this.inventory.push (this.newFood)
  }
  removeFromFoodList(index) {
    this.inventory.splice (index, 1)
  }
}