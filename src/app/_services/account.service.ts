import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 baseUrl= 'http://localhost:5241/api/';

  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl+'Users/login'+'?' + encodeURI(`email=${model.email}&password=${model.password}`), null);
  }
}
