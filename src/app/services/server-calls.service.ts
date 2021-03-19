import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerCallsService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getShopLst() {
    return this.http.get<any>(`${this.url}/shopDetails/`)
      .toPromise()
      .then(data => { return data; });
  }

  getReviewLst() {
    return this.http.get<any>(`${this.url}/ratings/`)
      .toPromise()
      .then(data => { return data; });
  }

  deleteShop(id: number) {
    return this.http.delete<any>(`${this.url}/shopDetails/${id}`)
      .toPromise()
      .then(data => { return data; });
  }

  addShop(shopData: object) {
    return this.http.post<any>(`${this.url}/shopDetails`, shopData)
      .toPromise()
      .then(data => { return data; });
  }

  addReview(feedback: object) {
    return this.http.post<any>(`${this.url}/ratings`, feedback)
      .toPromise()
      .then(data => { return data; });
  }

  updateShop(id: number, shopData: object) {
    return this.http.put<any>(`${this.url}/shopDetails/${id}`, shopData)
      .toPromise()
      .then(data => { return data; });
  }

  getCustomerLoginCredentials() {
    return this.http.get<any>(`${this.url}/customerLogin/`)
      .toPromise()
      .then(data => { return data; });
  }

  getShopOwnerLoginCredentials() {
    return this.http.get<any>(`${this.url}/shopOwnerLogin/`)
      .toPromise()
      .then(data => { return data; });
  }


}
