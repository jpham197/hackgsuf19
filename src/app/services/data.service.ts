import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  index = new BehaviorSubject<number>(0);
  currentIndex = this.index.asObservable();
  // index = 0;
  counter = 0;

  constructor() { }

  sendToService(): void {
    this.index.next(this.counter);
    // console.log(this.counter);
    if (this.index.value === 2) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }

}
