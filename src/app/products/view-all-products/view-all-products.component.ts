import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  searchText: string;
  productList: Product[];
  totalRecords: number;
  page: number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data;

      this.totalRecords = this.productList.length;
      console.log(this.totalRecords);
      console.log(this.page);
    });
  }

}
