import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  index: number;

  sendToService(index: number): void {
    this.index = index;
  }

  pullFromService(): number {
    return this.index;
  }

}
