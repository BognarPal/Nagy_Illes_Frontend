import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project Discite';

  //Az user bármi lehet string, int stb
  users:any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.http.get('http://localhost:5241/api/Users').subscribe(response=>{
      this.users= response;
    }, error=>{
      console.log(error);
    })
  }
}


