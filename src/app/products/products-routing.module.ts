import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  //http://localhost:4200/products
  { path: '', component: AllProductsComponent },
  //view product
  {
    path:'view/:id',component:ViewProductComponent
  },
  //wishlist
  {
    path:'wishlist',component:WishlistComponent
  },
  //cart
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
