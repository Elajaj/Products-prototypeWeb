import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {NewProductComponent} from './new-product/new-product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {
    path: "products" , component:ProductsListComponent

  },
  {
    path: "new-product" , component:NewProductComponent

  },
  {
    path: "" , redirectTo:"/products" , pathMatch:'full'
  },
  {
    path: "product-details/:id" , component:ProductDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
