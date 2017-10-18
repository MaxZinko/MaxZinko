import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
public members=[
{
	name:'admin',
	password:'admin'
},
{
	name:'user',
	password:'user'
},
];
loginUser(e)
{	
	e.preventDefault();
	var username = e.target.elements[0].value;
	var password = e.target.elements[1].value;
	for(let u of this.members){
	if(username == u.name && password == u.password) {
		this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
  	}
  }
}
}
