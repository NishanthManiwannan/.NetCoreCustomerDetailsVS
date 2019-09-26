import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData : PaymentDetail;
  readonly rootUrl = 'http://localhost:62336/api'

  list : PaymentDetail[];

  constructor(private http : HttpClient) { }

  postPaymentDetails(formData : PaymentDetail){
    return this.http.post(this.rootUrl+'/PaymentDetail',formData)
  }

  refreshList(){
    this.http.get(this.rootUrl+'/PaymentDetail')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[])
  }
  
}
