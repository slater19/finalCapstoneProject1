import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { productform } from '../admin/product-form/product-form';
import { SearchService } from 'src/app/search.service';
import { ArrayType } from "src/app/search.service";
import { searchProduct } from './search';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent   {
  searchText: any; 

  products1 : ArrayType[] = [];
  cartList : ArrayType[] = [];
  search = new searchProduct();
  
  i : number = 1;
  
constructor(private proservice:SearchService)
{
}
ngOnInit(): void{

  this.products1 = this.proservice.getProducts();

}
getvalues(id: any){
  console.log(this.products1[id]);
  const NewProduct = this.products1[id];
  this.onAddCart(NewProduct);
  alert("Product added to cart\n"  + "\nTotal Items in Cart: " + this.i++ +"\n Go to Shopping Cart..");
 
}
  onAddCart(NewProduct: ArrayType) {
    this.proservice.addCartProduct(NewProduct);
  }

}