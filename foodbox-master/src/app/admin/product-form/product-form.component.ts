import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArrayType, SearchService } from 'src/app/search.service';
import { productform } from './product-form';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

  productform = new productform();
  products1 : ArrayType[] = [];
  constructor(private proservice : SearchService)
  {
  }
  onAdd(array:ArrayType)
  {
    this.proservice.addProduct(array);
  }
  save(userForm : NgForm){
    
    alert("Product is Added, You can see in Product's Page")
    const NewProduct = {
      productId:parseInt(JSON.stringify(this.productform.productId)),
    productName: (this.productform.productTitle),
    productCat : (this.productform.productCat),
    productPrice : parseInt(JSON.stringify(this.productform.productPrice)),
    productImg : (this.productform.productImg),    
    }
    this.onAdd(NewProduct);
    
    
  }
}