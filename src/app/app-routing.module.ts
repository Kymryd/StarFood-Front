import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';



const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/byCategory/:id', component: ProductComponent},
  { path: 'categories', component: CategoryComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
