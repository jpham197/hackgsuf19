import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private data: DataService) { }

  index: number;

  ngOnInit() {
    this.data.currentIndex.subscribe(index => {
      console.log(index);
      this.index = index;
    });
  }

}
