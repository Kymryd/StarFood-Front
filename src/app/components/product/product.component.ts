import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Product } from '../../models/product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product.component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  selectedProduct: Product = new Product();

  // routage par catégorie :
  id: number;
  private sub: any;

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

    ngOnInit() {

    // lecture du param passé dans l'url (besoin d'implémenter ActivatedRoute)
      this.sub = this.route.params.subscribe(params => {
        this.id = +this.route.snapshot.paramMap.get('id');
      });
      // fin de la lecture du param passé dans l'url

      // si un param est passé au composant alors on filtre par catégorie
      if (this.id > 0) {
        this.productService.getProductsByCategory(this.id)
          .subscribe( data => {
            this.products = data;
          });
      } else {
        this.productService.getProducts()
          .subscribe(data => {
            this.products = data;
          });
      }
  }

  getSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }
}

