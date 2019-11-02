import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(`http://5dbd051e30411e0014f27227.mockapi.io/getItems`);
  }
}
