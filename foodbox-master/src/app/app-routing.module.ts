import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { OrderSuccessComponent } from './shopping-cart/order-success/order-success.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',component:ProductsComponent},
    {path:'shopping-cart', component:ShoppingCartComponent},
    {path:'admin', component:AdminLoginComponent},
    {path:'adminDashboard', component:AdminPageComponent},
    {path:'managePurchase',component:ProductsComponent},
    {path:'paymentGateway',component:ProductFormComponent},
    {path:'orderSummary',component:OrderSuccessComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }