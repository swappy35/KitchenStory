import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;
  public itemType:any;

  constructor(private productSrv : ProductService, private route : ActivatedRoute, private cartSrv : CartService) { }

  ngOnInit(): void {

    // public getProducts(){
      this.productSrv.getProducts().subscribe(data => {
        // console.log("1");
        console.log(data);
        this.products = data;
        this.products.forEach((a : any) => {
          Object.assign(a,{unit:1, total:a.price});
        });
      });
  }

  addToCart(product : any){
    this.cartSrv.addToCart(product);
  }

}

