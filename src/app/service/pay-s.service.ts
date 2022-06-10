import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaySService {

  constructor(private httpClient: HttpClient) { }

  public redirectPay(obj: any): Observable<any> {
    return this.httpClient.post<any>(environment.baseURL, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

}
