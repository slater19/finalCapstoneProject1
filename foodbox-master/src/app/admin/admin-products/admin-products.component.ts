import { Component } from '@angular/core';
import { SearchService } from 'src/app/search.service';

import { ArrayType } from "src/app/search.service";


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent{

  products1 : ArrayType[] = [];
  constructor(private proservice: SearchService)
{

}
ngOnInit(): void{

  this.products1 = this.proservice.getProducts();

}
  
onDelete(id:number){
  if(window.confirm("Are you sure you want to delete the product?")){
  this.proservice.deleteProduct(id);}
}
  

}