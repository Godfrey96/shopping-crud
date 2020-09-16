import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';

const routes: Routes = [
  //{ path: '', component: ProductsComponent },
  { path: '', component: ViewAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  //{ path: 'list-products', component: ViewAllProductsComponent },
  {path: 'category/:id', component: ViewProductsByCategoryComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
