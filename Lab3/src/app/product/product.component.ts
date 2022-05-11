import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
tomorrow = new Date();
term:string='';
products:Product[] = [
  new Product("watch","smart-watch","zz21c-z3c1",new Date((this.tomorrow.getDate() + 5)),3,600),
  new Product("iphone","iphone","gg21c-g3c1",new Date((this.tomorrow.getDate() + 10)),4,10000),
  new Product("lab","labtop","ll21c-z3c1",new Date((this.tomorrow.getDate() + 7)),5,15000),
  new Product("band","smart-band","mm21c-z3c1",new Date((this.tomorrow.getDate() + 6)),5,900),
  new Product("watch","Bracelet","yy21c-z3c1",new Date((this.tomorrow.getDate() + 8)),4,250),
  new Product("game","Game Controller","sd21c-z3c1",new Date((this.tomorrow.getDate() + 9)),3,150),
  new Product("pc","pc desktop","dc21c-z3c1",new Date((this.tomorrow.getDate() + 12)),2,1500),
];
  constructor() { }

  ngOnInit(): void {
  }

}
