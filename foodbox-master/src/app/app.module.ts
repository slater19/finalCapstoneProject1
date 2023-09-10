import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment} from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './shopping-cart/order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { from } from 'rxjs';
import { SearchComponent } from './search/search.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ChangePasswordComponent} from './admin/change-password/change-password.component';
import { ConvertToSpacesPipe } from './search/convert-to-spaces.pipe'; // <-- Add this
 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    ShoppingCartComponent,

    OrderSuccessComponent,
    AdminProductsComponent,
    LoginComponent,
    SearchComponent,
    ProductFormComponent,
    AdminLoginComponent,
    AdminPageComponent,
    UserLoginComponent,
    ChangePasswordComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  
  RouterModule.forRoot([
    {path: '', component: ProductsComponent},
    {path: 'product', component:SearchComponent },
    {path: 'shopping-cart', component: ShoppingCartComponent},
         
    {path: 'order-success', component: OrderSuccessComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin/products', component: AdminProductsComponent},
    
    {path: 'admin/products/new', component: ProductFormComponent},
    {path: 'admin/products/edit', component: ProductFormComponent},
    {path: 'search', component: SearchComponent},
    {path: 'admin/login', component: AdminLoginComponent},
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'userlogin', component: UserLoginComponent},
    {path: 'admin/changepassword', component: ChangePasswordComponent},
    
    

  ])    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }