import { Component, OnInit } from '@angular/core';
import { ArrayType, SearchService } from '../search.service';
import { shoppingCart } from './shoppingcart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartproducts : ArrayType[] = [];
  scart = new shoppingCart();
  cartTotal : number = 0;

    
  constructor(private proservice: SearchService) { 
    
  }
  ngOnInit(): void{

    this.cartproducts = this.proservice.getCartProducts();
    for (let index = 0; index < this.cartproducts.length; index++) {
      
      this.scart.productPrice += this.cartproducts[index].productPrice;
    }
    
        
  }

}
