import { Component } from '@angular/core';
import { product } from '../Shared/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor() { }

  productsList:product[] = [];

  //run when page load
  ngOnInit(): void {
    for(let i = 0; i < 5; i++) {
      this.productsList.push({Id: i, Name: `Phone${i}`})
    }
  }

}
