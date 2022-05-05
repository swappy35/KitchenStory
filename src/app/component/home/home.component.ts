import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/service/items/food.service';
import { ProductService } from 'src/app/service/items/product.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];
  public products:any;
  
  constructor(private foodService:FoodService, private productSrv:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  getProductByType(itemType:string){
    console.log("Navogate to "+itemType);
    this.router.navigate(['/item-page',itemType])
    // this.productSrv.getProductByType(type).subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // });
    
  }

}
