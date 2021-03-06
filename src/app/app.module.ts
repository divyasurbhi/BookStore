import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { ShopReducer } from './store/reducers/reducer';
import{ShopEffects} from './store/effects/effects';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   StoreModule.forRoot({ shop: ShopReducer }), //When registering the ShopReducer, we assign it a unique identifier (shop).
   EffectsModule.forRoot([ShopEffects])
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
