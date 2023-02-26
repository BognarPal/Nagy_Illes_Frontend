import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[];

  constructor(private userService: UsersService){}

  ngOnInit(): void{
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe(users=>{
      this.users=users;
    })
  }
}
