import { Component, OnInit } from '@angular/core';
import { Block2Component } from './block2/block2.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
MyEvent(e)
{
	alert('IT WORKS!');
}
}
