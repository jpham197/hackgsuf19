import { Component, OnInit, HostBinding, Input, Inject, Injectable, HostListener } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-status',
  animations: [
    trigger('onOff', [
      // ...
      state('on', style({
        height: '200px',
        width: '200px',
        opacity: 1,
        backgroundColor: 'white'
      })),
      state('off', style({
        height: '100px',
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'gray'
      })),
      transition('on => off', [
        animate('1s')
      ]),
      transition('off => on', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private data: DataService) { }

  isOn = true;
  index: number = 0;
  prevIndex: number = 0;
  arr: boolean[] = [false, false, false];

  testIndex: number;

  ngOnInit() {
    this.data.currentIndex.subscribe(index => {
      this.testIndex = index;
    });

    setInterval(() =>{
      this.toggle();
    }, 5000);
  }

  
  @HostListener('document:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === "Enter") {
      // this.dequeue();
      this.toggle();
    }
    if (event.key === "q") {
      // this.orders = [];
    }
  }

  toggle() {
    console.log("toggling");
    if  (this.index > 3) {
      this.index = 0;
    }
    this.arr = [false, false, false];
    this.arr[this.index] = true;
    this.index++;
  }

}
