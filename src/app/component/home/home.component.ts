import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from 'src/app/service/home/food-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodcategory:string[]=[];
  constructor(private fc:FoodCategoryService) { }

  ngOnInit(): void {
    this.foodcategory = this.fc.getAll();
  }

}
