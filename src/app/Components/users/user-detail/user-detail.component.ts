import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
user:UserModel;

constructor(private usersService: UsersService, private route: ActivatedRoute){}

ngOnInit(): void{
this.loadUser();
}

loadUser(){
  this.usersService.getUser(this.route.snapshot.paramMap.get("id")).subscribe(user=>{
    this.user=user;
  })
}

}
