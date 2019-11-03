import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: 'kitchen', component: KitchenComponent
  },
  {
    path: 'customer', component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
