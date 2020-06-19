import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopKCComponent } from './components/shop-kc/shop-kc.component';
import { ShopItemKCComponent } from './components/shop-item-kc/shop-item-kc.component';
import { ShopDetailsKCComponent } from './components/shop-details-kc/shop-details-kc.component';
import {KCDataService} from './services/kc-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopKCComponent,
    ShopItemKCComponent,
    ShopDetailsKCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    KCDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
