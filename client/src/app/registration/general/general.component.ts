import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() product:object;
@Output() productSaved=new EventEmitter();
saveproduct()
{
	this.productSaved.emit(this.product);
}
}
