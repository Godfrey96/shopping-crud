import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product;
  displayMessage: string;

  //imgURL = 'http://localhost:4200/assets/images/';
  //imgURL = 'src/assets/images/';

  constructor(private fb: FormBuilder,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    //this.addProduct();
  }

  addNewProduct(form){

    let newProduct = {
      id: 0,
      productName: form.value.productName,
      productDescription: form.value.productDescription,
      //productImage: form.value.productImage,
      productPrice: form.value.productPrice
    };
    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
      this.displayMessage = "Product created successfully"
    });
  }

  /*selectFile(event){
      if(event.target.files.length > 0){
        const file = event.target.files[0];
        this.addNewProduct.get('image').setValue(file);
      }
  }*/

}
