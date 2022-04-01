import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoryService {

  constructor() { }

  getAll(): string[] {
    return [
      'assets/images/Home/crockeries.jpg',
      'assets/images/Home/daily-essentials.jpg',
      'assets/images/Home/fruits-vegetables.jpg',
      'assets/images/Home/groceries.jpg',
      'assets/images/Home/hardware.jpg',
      'assets/images/Home/utensils.jpeg',
    ]
  }
}
