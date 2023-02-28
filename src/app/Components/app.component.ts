import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project Discite';

  //Az user bármi lehet string, int stb
  users:any;

  constructor(private accountService: AccountService) {}

  ngOnInit(){
    
    this.setCurrentUser()
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: UserModel = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}


