import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  items = [
    {
      "number": "1"
    },
    {
      "number": "2"
    },
    {
      "number": "3"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
