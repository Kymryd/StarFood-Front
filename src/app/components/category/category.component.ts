import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Category} from '../../models/category.model';
import {CategoryService} from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category = new Category();

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe( data => {
        this.categories = data;
      });
  }

  getSelectedCategory(category: Category) {
    this.selectedCategory = category;
  }

  getProductsByCategory(categoryId: number) {
    this.router.navigate(['products/byCategory/', categoryId]);
  }
}
