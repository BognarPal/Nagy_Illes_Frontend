import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from 'src/app/services';
import { environment } from 'src/Enviroments/environment';
import { UserModel } from 'src/app/models';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  baseUrl = environment.apiUrl;
  username: string;
  email: string;
  password: string;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  submitProfile() {
    const body = {
      username: this.username,
      email: this.email,
      password: this.password
    };



    this.http.put<UserModel>(this.baseUrl+ 'users', body).subscribe(response => {
      console.log('Profile updated successfully!'), this.accountService.setCurrentUser(response);
    }, error => {
      console.error('Failed to update profile:', error);
    });
}
}