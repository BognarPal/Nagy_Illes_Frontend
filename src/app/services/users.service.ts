import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { User } from '../Models/user';


/*
const user = JSON.parse(localStorage.getItem('user'));

if (user && user.token) {
  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + user.token
    })
  }
  };
  */

  const httpOptions= {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }




@Injectable({
  providedIn: 'root'
})
export class UsersService {
baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  }

  getUser(username){
    return this.http.get<User>(this.baseUrl + 'users/'+ username, httpOptions);
  }
  
}
