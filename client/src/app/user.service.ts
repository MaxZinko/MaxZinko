import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

private isuserloggedin;
private users:object;
private body:object;
private baseurl="http:/localhost:8000/api/:id";
  constructor(private http:HttpClient,private userService:UserService,users=[],body={}) {
  	this.isuserloggedin=false;
   }
   ngOninit(){this.getUsers();}
  setUserLoggedIn() {
  	this.isuserloggedin = true;
  }

  getUserLoggedIn() {
  	return this.isuserloggedin;
  }
  getUsers(){
  	this.http.get(this.baseurl+'/users'/*+id*/).
  	subscribe(users=>{return-users;});
  	this.http.post(this.baseurl+'/users'/*+id*/,body).
  	subscribe(users=>{return-users;},err=>{return-err});
  	this.users=this.userService.getUsers();
  }

}
