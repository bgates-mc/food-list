import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "food list";
  inventory = [
    {name: "beef", color: this.getRandomColor()}
  ];
  newFood = "";
  addToFoodList() {
    if (this.newFoodValidator()) {
      //this.inventory.push(this.newFood.trim().toLowerCase());
      this.inventory.push({name: this.newFood.trim().toLowerCase(), color: this.getRandomColor()});
      this.newFood = "";
    }
  }
  newFoodValidator() {
    //return this.newFood.trim() !== "" && !this.inventory.includes(this.newFood.trim().toLowerCase());
    return this.newFood.trim() !== "";
  }
  
  removeFromFoodList(index) {
    this.inventory.splice(index, 1);
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

// what's next?
// convert these array strings into objects (name and color) (use .name)