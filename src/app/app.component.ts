import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "food list";
  inventory = ["beef", "potatoes", "carrots", "peas", "onions", "flour", "tomato sauce", "seasoning"];
  newFood = "";
  addToFoodList() {
    if (this.newFoodValidator()) {
      this.inventory.push(this.newFood.trim().toLowerCase());
      this.newFood = "";
    }
  }
  newFoodValidator() {
    if (this.newFood.trim() !== "") {
      return !this.inventory.includes(this.newFood.trim().toLowerCase());
    }
    return false;
  }
  newFoodValidator2() {
    if (this.newFood.trim() === "") {
      return false;
    }

    if (this.inventory.includes(this.newFood.trim().toLowerCase())) {
      return false;
    }

    return true;
  }
  newFoodValidator3() {
    return this.newFood.trim() !== "" && !this.inventory.includes(this.newFood.trim().toLowerCase());
  }
  newFoodValidator4() {
    const isBlank = this.newFood.trim() === "";
    const isDuplicate = this.inventory.includes(this.newFood.trim().toLowerCase());

    return !(isBlank || isDuplicate);
  }
  removeFromFoodList(index) {
    this.inventory.splice(index, 1);
  }
}

// what's next?
// because I'm eager to start getting into some more designy things but need to continue to lay a more traditional foundation of knowledge first, maybe we could give these things a random color when added or something?