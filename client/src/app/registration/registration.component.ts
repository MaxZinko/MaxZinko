import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public step=1;
public product={
	title:''
}
gotoPage(isNext){
this.step+=(isNext)?1:-1;
}
saveproduct(product)
{
 this.product.title=product.title;
 this.step++;
 console.log("saved");
 console.log(this.product);
}
}
