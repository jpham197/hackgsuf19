import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { OrdersService } from 'src/app/services/orders.service';
import { MatButtonModule } from "@angular/material";

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

  @HostListener('document:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key == "Enter") {
      this.dequeue();
    }
  }

  call(): void {
    this.itemsObs$ = this.orders.getItems().subscribe((result) => {
      this.items = result;
      // console.log(this.items);
    })
  }

  dequeue(): void {
    this.items.shift();
    console.log(this.items);
  }

  ngOnDestroy() {
    this.itemsObs$.unsubscribe();
  }


}
