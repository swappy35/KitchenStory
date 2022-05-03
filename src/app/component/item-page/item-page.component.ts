import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  public products : any;

  constructor(private productSrv : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.productSrv.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  public getProductByType(type:string){
    this.productSrv.getProductByType(type).subscribe(data =>{
      console.log(data);
      this.products = data;
    });
  }

}
