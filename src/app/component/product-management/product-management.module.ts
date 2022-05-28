import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ProductService } from 'src/app/service/items/product.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductManagementComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[ProductService]
})
export class ProductManagementModule { }









