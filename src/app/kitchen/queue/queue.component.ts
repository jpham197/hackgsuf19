import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit, OnDestroy {

  constructor(private orders: OrdersService) { }

  itemsObs$;
  items: any = [
  ]

  ngOnInit() {
    this.call();
    this.orders.getTransactions();
  }

  call(): void {
    this.itemsObs$ = this.orders.getItems().subscribe((result) => {
      this.items = result;
      // console.log(this.items);
    })
  }

  ngOnDestroy() {
    this.itemsObs$.unsubscribe();
  }

}
