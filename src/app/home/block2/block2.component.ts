import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.scss']
})
export class Block2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public images=[
{
	img:'/assets/block2_img1.jpg'
},
{
	img:'/assets/block2_img2.jpg'
},
{
	img:'/assets/block2_img3.jpg'
},
];
public text=[
{
	headtext:'Chicken Breast',
	subtext:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
},
{
	headtext:'Grilled Chicken',
	subtext:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
},
{
	headtext:'Steak Frites',
	subtext:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
},
];
}
