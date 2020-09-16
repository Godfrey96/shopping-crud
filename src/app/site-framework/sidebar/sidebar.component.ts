import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../products/product.service';
import { Category } from '../category';
//import { Product } from '../../products/product'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(data => {
      this.categoryList = data;
    });
  }

}
