import { Component, OnInit } from '@angular/core';
import { ArrayType, SearchService } from 'src/app/search.service';
import { shoppingCart } from '../shoppingcart';


@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  cartproducts : ArrayType[] = [];
  scart = new shoppingCart();
  
  constructor(private proservice: SearchService) { }

  ngOnInit(): void {
    this.cartproducts = this.proservice.getCartProducts();
    for (let index = 0; index < this.cartproducts.length; index++) {
      
      this.scart.productPrice += this.cartproducts[index].productPrice;
    }
  }

  

}