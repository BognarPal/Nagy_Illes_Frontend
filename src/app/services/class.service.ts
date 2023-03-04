import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { ClassModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  getClasses(): Observable<ClassModel> {
    return this.http.get<ClassModel>(this.baseUrl + 'Statistics/classes');
  }

}
