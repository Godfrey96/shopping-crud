import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;
  productDetails: Product;
  displayMessage: string;

  constructor(
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
      });
    });
  }

  updateProduct(form){

    const updateProduct = {
      id: form.value.id,
      productName: form.value.productName,
      productDescription: form.value.productDescription,
      //productImage: form.value.productImage,
      productPrice: form.value.productPrice
    };
    console.log(updateProduct);

    this.productService.updateProduct(this.productId, updateProduct).subscribe(data => {
      console.log(data);
      this.displayMessage = "Product updated successfully";
    });
  }
}
