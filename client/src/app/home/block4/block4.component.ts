import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block4',
  templateUrl: './block4.component.html',
  styleUrls: ['./block4.component.scss']
})
export class Block4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 public column ='BREAKFAST'


public items1 =[
{
	img:'/assets/block4_img1.jpg',
	strongtext:'DUCK BREAST',
	subtext:'Smoked confit fennel & umbles',
	price:'25$'
},
{
	img:'/assets/block4_img2.jpg',
	strongtext:'DUCK BREAST',
	subtext:'Smoked confit fennel & umbles',
	price:'20$'
},
{
	img:'/assets/block4_img3.jpg',
	strongtext:'DUCK BREAST',
	subtext:'Smoked confit fennel & umbles',
	price:'25$'
}
]
public items2=[
{
	img:'/assets/block4_img4.jpg',
	strongtext:'DUCK BREAST',
	subtext:'Smoked confit fennel & umbles',
	price:'30$'
},
{
	img:'/assets/block4_img5.jpg',
	strongtext:'DUCK BREAST',
	subtext:'Smoked confit fennel & umbles',
	price:'24$'
},
{
	img:'/assets/block4_img6.jpg',
	strongtext:'DUCK BREAST',
	subtext:'Smoked confit fennel & umbles',
	price:'32$'
},
];
}
