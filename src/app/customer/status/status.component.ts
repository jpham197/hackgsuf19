import { Component, OnInit, HostBinding } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  // ...
} from '@angular/animations';

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

  constructor() { }

  ngOnInit() {
  }

  isOn = true;
  index: number = 0;
  prevIndex: number = 0;
  arr: boolean[] = [false, false, false];


  toggle() {
    if  (this.index > 3) {
      this.index = 0;
    }
    this.arr = [false, false, false];
    this.arr[this.index] = true;
    this.index++;
  }

}
