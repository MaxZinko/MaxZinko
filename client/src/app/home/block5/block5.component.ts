import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block5',
  templateUrl: './block5.component.html',
  styleUrls: ['./block5.component.scss']
})
export class Block5Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }
public headtext='Special Orders';
public subtext=[
{
	parag:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam non ummy nibh euismod tincidunt ut laoreet'
},
{
	parag:'Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi. Nulla facilisi tristique senectus et netus et malesuada fames ac turpis egestas.'
},
{
	parag:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam non ummy nibh euismod tincidunt ut laoreet'
},
{
	parag:'Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi. Nulla facilisi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
];
}
