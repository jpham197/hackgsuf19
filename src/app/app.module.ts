import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueComponent } from './kitchen/queue/queue.component';
import { OrderComponent } from './kitchen/order/order.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
