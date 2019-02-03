import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
user:User;
  
constructor(private userServis: UserService) {}

  ngOnInit() {
    this.user = {
      firstName: '',
      email: '',
      lastName:'',
      countryCode:'',
      phone:'',
      password:''
    }

  }

}
