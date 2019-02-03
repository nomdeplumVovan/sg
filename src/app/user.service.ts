import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  private users = [];


  constructor() { }


  getUsers() {
    return this.users;
  }


}