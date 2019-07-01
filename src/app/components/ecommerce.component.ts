import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductComponent} from './product/product.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrdersComponent} from './orders/orders.component';
import {CategoryComponent} from './category/category.component';

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
    private collapsed = true;
    orderFinished = false;
    displayCategories = true;
  selectedCategory: number;

    @ViewChild('categoryC')
    categoryC: CategoryComponent;

    @ViewChild('productsC')
    productsC: ProductComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;


    constructor() {
    }

    ngOnInit() {
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }
    showCategories(showCat: boolean) {
      this.displayCategories = !this.displayCategories;
    }

    selectCategory(categoryId: number) {
      this.displayCategories = false;
      this.productsC.selectedCategory = categoryId;
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
        this.displayCategories = true;
    }
}