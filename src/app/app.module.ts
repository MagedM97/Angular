import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { ShopComponent } from './component/shop/shop.component';
import { ContactComponent } from './component/contact/contact.component';
import { ShopDetailComponent } from './component/shop-detail/shop-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { ChecoutComponent } from './component/checout/checout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    ContactComponent,
    ShopDetailComponent,
    CartComponent,
    ChecoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
