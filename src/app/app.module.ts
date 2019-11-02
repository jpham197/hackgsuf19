import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueComponent } from './kitchen/queue/queue.component';
import { OrderComponent } from './kitchen/order/order.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrdersService } from './services/orders.service';
import { CustomerComponent } from './customer/customer.component';
import { StatusComponent } from './customer/status/status.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    OrderComponent,
    CustomerComponent,
    StatusComponent,
    KitchenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
