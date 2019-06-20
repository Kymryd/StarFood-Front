import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';
import {ProductService} from './product.service';


@Component({
  selector: 'app-product.component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) { }

    ngOnInit() {
      this.productService.getProducts()
        .subscribe( data => {
          this.products = data;
        });
    }
  }

