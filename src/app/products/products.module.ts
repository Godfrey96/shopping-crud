import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    DeleteProductComponent,
    PageNotFoundComponent,
    ViewProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    //PaginationModule.forRoot()
  ],
  exports: [
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    DeleteProductComponent,
    PageNotFoundComponent,
    ViewProductsByCategoryComponent
  ],
})
export class ProductsModule { }
