import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  searchText: any;  
  products: any[] = [
  {productName:"Butter Tofu",
  productCat : "Indian",
  productPrice : 10,
  productImg :"/assets/images/buttertofu.png"},
  {productName:"Biryani",
  productCat : "Indian",
  productPrice : 14,
  productImg :"/assets/images/biryani.png"},
  {productName:"Steamed Mince Burger",
  productCat : "Chinese",
  productPrice : 14,
  productImg :"/assets/images/burger.png"},
  {productName:"Fried Rice",
  productCat : "Chinese",
  productPrice : 9,
  productImg :"/assets/images/friedrice.png"},
  {productName:"Paneer Pizza",
  productCat : "Italian",
  productPrice : 14,
  productImg :"/assets/images/pizza.png"},
  ]
    

}