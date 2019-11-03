import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../../classes/item";
import { Index } from "../../classes/index";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  
  constructor() { }

  @Input() item: Item;
  @Input() index: Index;

  ngOnInit() {
  }

}
