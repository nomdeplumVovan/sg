import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.css']
})
export class OptInComponent implements OnInit {
  user: User = new User();


  constructor(private userServis: UserService) { }

  ngOnInit() {

  }

}
