import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public socialweb=[
{
 website:"https://facebook.com",
 img:"/assets/facebook-logo.png"
},
{
 website:'https://twitter.com',
 img:'/assets/TwitterLogo_white.png'
},
{
 website:'https://google.com',
 img:'/assets/google_icon.png'
},
{
 website:'https://instagram.com',
 img:'/assets/Instagram-white.png'
},
{
 website:'https://youtube.com',
 img:'/assets/youtube_icon.png'
}
];
public menu=[
{
	text:'Homepage',
	link:'/'
},
{
	text:'About Us',
	link:'/login'
},
{
	text:'Menu',
	link:'/'
},
{
	text:'Reservations',
	link:'/login'
},
{
	text:'Restaurant Galary',
	link:'/'
},
{
	text:'Contact',
	link:'/login'
}
];
}