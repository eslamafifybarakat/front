import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  email: any = localStorage.getItem('email');
  id: any = localStorage.getItem('id');
  street: any = localStorage.getItem('street');
  city: any = localStorage.getItem('city');
  phone: any = localStorage.getItem('phone');
  name: any = localStorage.getItem('name');
  constructor(
    private myuser: AuthService,
    private myrouter: Router,
    private _AuthService: AuthService
  ) {}

  ngOnInit(): void {}

  editprofile(
    name: any,
    phone: any,
    email: any,
    street: any,
    city: any,
    password: any
  ) {
    const salt = bcrypt.genSaltSync(10);
    const newpass = bcrypt.hashSync(password, salt);
    let data = {
      Name: name,
      Email: email,
      Password: newpass,
      Phone: phone,
      Address_street: street,
      Address_city: city,
    };
    this.myuser.updateUser(this.id, data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );


    this._AuthService
      .sendPasswordChangeMail({
        email: email,
        password: password,
      })
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );

      
    this._AuthService.logout();
  }
}
