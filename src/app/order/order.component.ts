import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../classes/item";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  number = 0;

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
