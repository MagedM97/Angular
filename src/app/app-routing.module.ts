import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ChecoutComponent } from './component/checout/checout.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { ShopDetailComponent } from './component/shop-detail/shop-detail.component';
import { ShopComponent } from './component/shop/shop.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"shop", component:ShopComponent},
  {path:"shop-detail",component:ShopDetailComponent},
  {path:"contact",component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:ChecoutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
