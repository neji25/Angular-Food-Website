import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {Food} from "../shared/models/Food";
import {StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods: Food[] = []
  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getAll();
  }

  onRate($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
    alert(
      `Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`
    );
  }
}
