import { HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(username){
    return this.http.get<User>(this.baseUrl + 'users/'+ username);
  }
  
}
