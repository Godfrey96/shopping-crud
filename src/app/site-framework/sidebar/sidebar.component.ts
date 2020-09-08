import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../products/product.service';
//import { Product } from '../../products/product'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private productServie: ProductService) { }

  ngOnInit(): void {
  }

}
