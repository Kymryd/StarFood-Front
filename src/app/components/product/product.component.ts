import {Component, Input, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/internal/Subscription';
import {ProductOrder} from '../../models/product-order.model';
import {Product} from '../../models/product.model';
import {ProductOrders} from '../../models/product-orders.model';
import {EcommerceService} from '../../services/EcommerceService';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected = false;

  @Input()
  selectedCategory: number;

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
    this.productOrders = [];
    // this.loadProducts();
    this.loadProductsbyCategory(1);
    this.loadOrders();
  }

  addToCart(order: ProductOrder) {
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error) => console.log(error)
      );
  }

  loadProductsbyCategory(id) {
    if(id) {
      this.ecommerceService.getProductsByCategory(id)
        .subscribe(
          (products: any[]) => {
            this.products = products;
            this.products.forEach(product => {
              this.productOrders.push(new ProductOrder(product, 0));
            });
          },
          (error) => console.log(error)
        );
    } else {
      this.loadProducts();
    }
  }
  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    // this.productSelected = false;
  }
}
