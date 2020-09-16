import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId: number;
  productDetails: Product;
  displayMessage: string;
  confirmDelete: false;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    /*this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.viewProduct(this.productId).subscribe(data => {
      this.productDetails = data;
    });*/
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe((productData) => {
        this.productDetails = productData;
      });
    });

  }

  deleteProduct(){
    this.productService.deleteProduct(this.productDetails.id).subscribe((data: Product) => {
      this.productDetails = data;
      this.displayMessage = "Product deleted successfully";
      this.router.navigate(['/products']);
    });
  }

}
