import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { OrdersService } from 'src/app/services/orders.service';
import { MatButtonModule } from "@angular/material";
import { element } from '@angular/core/src/render3';
import { config } from '../../services/config'

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})

export class QueueComponent implements OnInit, OnDestroy {

  constructor(private os: OrdersService) { }

  itemsObs$;
  items: any = [
  ]

  tlogIds = [];
  orders = [];
  pastOrders = [];

  ngOnInit() {
    console.log(config.transactionBody.fromTransactionDateTimeUtc);
    setInterval(() =>{
      this.os.getTransactions()
        .subscribe(data => {
          data["pageContent"].forEach(element => {
            this.tlogIds.push(element.tlogId);
          })
          this.tlogIds.forEach(id => {
            this.os.getOrders(id).subscribe(element => {
              // this.orders.push(order);
              let order = element["tlog"]["items"];
              let name = element["tlog"]["name"];
              order.forEach(elem => {
                elem.customer = name;
                // console.log(elem);
                if (!this.ordersContains(elem.id)) {
                  this.orders.push(elem);
                  this.pastOrders.push(elem.id)
                }
              });
            })
          });
        });
    }, 7000);
    // this.os.getTransactions()
    //   .subscribe(data => {
    //     data["pageContent"].forEach(element => {
    //       this.tlogIds.push(element.tlogId);
    //     })
    //     this.tlogIds.forEach(id => {
    //       this.os.getOrders(id).subscribe(element => {
    //         let order = element["tlog"]["items"];
    //         let name = element["tlog"]["customer"]["name"];
    //         console.log(name);
    //         order.forEach(elem => {
    //           elem.customer = name;
    //           console.log(elem);
    //           if (!this.ordersContains(elem.id)) {
    //             this.orders.push(elem);
    //             this.pastOrders.push(elem.id)
    //           }
    //         });
    //       })
    //     });
    //   });

    //apparently this waits until the data is populated??
    setTimeout(() => {
      // console.log(this.orders)
    }, 1500);
  }

  @HostListener('document:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === "Enter") {
      this.dequeue();
    }
    if (event.key === "q") {
      this.orders = [];
    }
  }

  call(): void {
    this.itemsObs$ = this.os.getItems().subscribe((result) => {
      this.items = result;
    });
  }
  count = 0;
  incount(): void{
    this.count += 1;
    if (this.count == 4) {
      this.dequeue();
      this.count = 0;
    }
  }

  dequeue(): void {
    this.items.shift();

    this.orders.shift();
  }

  ordersContains(id) {
    for (let i = 0; i < this.pastOrders.length; i++) {
      if (this.pastOrders[i] === id) {
        return true;
      }
    }
    return false;
  }

  ngOnDestroy() {
    this.itemsObs$.unsubscribe();
  }

}
