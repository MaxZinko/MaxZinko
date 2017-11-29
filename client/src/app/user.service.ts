import { Injectable } from '@angular/core';
import {HttpClient/*,HttpResponse,HttpHeaders*/ } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import {Subject } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
const USER_DATA_URL='http://localhost:8000/app/v1/products';
@Injectable()
//class User{
// _id:string;
//  title:string;
//  description:string;
//  price:number;
//}

export class UserService {

private isuserloggedin;
public users=new Subject<any[]>();
private body:object;
//private baseurl='http://localhost:8000/app/v1';
//private headers:HttpHeaders;
constructor(private http:HttpClient) {
  	this.isuserloggedin=false;
    this.body={};
    //this.headers=new HttpHeaders({'Content-Type':'application/json'});
   }
   ngOninit(){
   }
  setUserLoggedIn() {
  	this.isuserloggedin = true;
  }

  getUserLoggedIn() {
  	return this.isuserloggedin;
  }
  uploadUsers() {
    this.http
    .get(USER_DATA_URL)
    .forEach(res => {
      this.setUsers(res);
    });
  }

  setUsers(newUsers: any) {
    this.users.next(newUsers);
  }
  getUsers():Observable<any[]>{
    return this.users.asObservable();
  }
  setUser(API_URL,product)
  {
    return this.http.post(API_URL, product)
      .forEach(res => {
        const result = res;
        console.log('result', result);});
  }
  deleteUser(id){
    this.http.delete(USER_DATA_URL+'/'+id).subscribe(id=>console.log(id));
  }
  updateUser(product){
    this.http.put(USER_DATA_URL+'/'+product["_id"],product).subscribe(product=>console.log(product));
  }
  //getUsers(callback){
  	//this.http.get(this.baseurl+'/products'/*+id*/).subscribe(users=>{callback(users);});
  //}
//this.http.post(this.baseurl+'/users'/*+id*/,this.body).
    //subscribe(users=>{return-users;},err=>{return-err});
}