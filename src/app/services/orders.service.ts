import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from "./config";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  //Mock API call
  getItems() {
    return this.http.get(config.getItemsUrl);
  }

  transactionHeader = {
    headers: new HttpHeaders(
      config.transactionHeaders
    )
  };

  //Get transaction IDs
  getTransactions() {
    return this.http.post(config.transactionUrl, config.transactionBody, this.transactionHeader);
  }

  options = {
    headers: new HttpHeaders(
      config.orderHeaders
    )
  }

  //Get orders from transaction ID
  getOrders(tLogId) {
    let url = `${config.ordersUrl}${tLogId}`;
    return this.http.get(url, this.options);
  }
}
