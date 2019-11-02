import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  // items: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.call();
  }

  call(): void {
    this.http.get(`http://5dbd051e30411e0014f27227.mockapi.io/getItems`)
      .subscribe((data) => {
        // console.log(typeof(data));
        // this.items.next(data);
      });
  }

}
