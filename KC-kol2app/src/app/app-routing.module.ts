import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopKCComponent} from './components/shop-kc/shop-kc.component';
import {ShopDetailsKCComponent} from './components/shop-details-kc/shop-details-kc.component';

const routes: Routes = [
  {
    path: '',
    component: ShopKCComponent,
  },
  {
    path: 'details/:id',
    component: ShopDetailsKCComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
