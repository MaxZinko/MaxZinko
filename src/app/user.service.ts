import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

private isuserloggedin;
private username;
  constructor() {
  	this.isuserloggedin=false;
   }
  setUserLoggedIn() {
  	this.isuserloggedin = true;
  }

  getUserLoggedIn() {
  	return this.isuserloggedin;
  }
}
