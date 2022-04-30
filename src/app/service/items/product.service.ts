import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpCLient : HttpClient) { }

  private url : string = 'http://localhost:3000/products';

}
