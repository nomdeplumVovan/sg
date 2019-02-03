import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;

  constructor(private userServis: UserService) { }

  ngOnInit() {
    this.user = {
      firstName: '',
      email: '',
      lastName: '',
      countryCode: '',
      phone: '',
      password: ''
    }

  }

}
