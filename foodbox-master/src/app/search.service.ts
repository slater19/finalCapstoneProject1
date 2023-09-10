import { Injectable } from "@angular/core";
import { RouterModule} from "@angular/router";

export interface ArrayType{
    productId:number,
    productName: string,
    productCat : string,
    productPrice : number,
    productImg : string,
  }
  
@Injectable({
    providedIn: 'root'
})

export class SearchService{
    
    private cartList: ArrayType[] = [];
     mail : string = 'consumer@gmail.com';
     pass : string = 'consumer1';
    private productList: ArrayType[]= [
        {productId:1,
        productName:"Butter Tofu",
      productCat : "Indian",
      productPrice : 14,
      productImg :"foodbox\src\assets\images\buttertofu.png"},
      {productId:2,
      productName:"Biryani",
      productCat : "Indian",
      productPrice : 14,
      productImg :"C:\foodbox\foodbox\src\assets\images\biryani.png"},
      {productId:3,
      productName:"Steamed Mince Burger",
      productCat : "Chinese",
      productPrice : 25,
      productImg :"foodbox\src\assets\images\burger.png"},
      {productId:4,
      productName:"Fried Rice",
      productCat : "Chinese",
      productPrice : 210,
      productImg :"C:\foodbox\foodbox\src\assets\images\vegetarian-meals.jpg"},
      {productId:5,
      productName:"Red Sause Pasta ",
      productCat : "Mexican",
      productPrice : 20,
      productImg :"C:\foodbox\foodbox\src\assets\images\corn.png"},
      {productId:6,
      productName:"Paneer Pizza",
      productCat : "Italian",
      productPrice : 55,
      productImg :"C:\foodbox\foodbox\src\assets\images\pizza.png"},
      {productId:7,
      productName:"Elote de Corn",
      productCat : "Mexican",
      productPrice : 35,
      productImg :"foodbox\src\assets\images\corn.png"},
      {productId:8,
      productName:"Burrito",
      productCat : "Mexican",
      productPrice : 12,
      productImg :"C:\foodbox\foodbox\src\assets\images\buritto.png"},
      {productId:9,
      productName:"Cereals",
      productCat : "Cereals",
      productPrice : 15,
      productImg :"https://images.pexels.com/photos/1080105/pexels-photo-1080105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:10,
      productName:"Ravioli",
      productCat : "Italian",
      productPrice : 10,
      productImg :"foodbox\src\assets\images\Ravioli.png"},
    
    ];
  
    changepwd(pwd:string)
    {
      this.pass = pwd;
    }
    getpwd(){
      return this.pass;
    }
    getProducts():ArrayType[] {

        return this.productList;
    }
    deleteProduct(id: number) {
      const index = this.productList.findIndex(
        product => product.productId === id
      )

      if(index >= 0){
        this.productList.splice(index,1);
      }
      
    }
    addProduct(newproduct : ArrayType){
      this.productList.push(newproduct);
    }
    GoToAdmin(){}
    addCartProduct(cartItems : ArrayType){
      this.cartList.push(cartItems);
    }
    getCartProducts():ArrayType[] {

      return this.cartList;
    }
    onAddCartProduct(addpro : ArrayType){
      this.cartList.push(addpro);
    }
}