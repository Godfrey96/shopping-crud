import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { AlertifyService } from '../alertify.service';

import { Product } from '../product';
import { Category } from 'src/app/site-framework/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createForm: FormGroup;
  productSubmitted: boolean;
  product: Product;
  categoryList: Category;

  displayMessage: string;
  selectedFile: File = null;
  upLoadedFile: any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private productService: ProductService,
              private alertify: AlertifyService
              ) { }

  ngOnInit(): void {
    // loading the addProduct fields
    this.addProduct();

    this.productService.getAllCategories().subscribe(data => {
      this.categoryList = data;
    })
  }

  // loading and validating the addProduct fields
  addProduct(){
    this.createForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      categoryId: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      productDescription: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      productImage: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadstart = (p) => {
        console.log(p);
      };
      reader.onloadend = (e) => {
        console.log(e.target);
        this.upLoadedFile = reader.result;
        this.createForm.get('productImage').setValue(this.upLoadedFile);
        //console.log(this.upLoadedFile);
      };
    }

  // submitting the fields
  onSubmit(){

    this.productSubmitted = true;
    if(this.createForm.valid){
      this.productService.createProduct(this.createForm.value).subscribe(data => {
        console.log(data)
        this.displayMessage = "Product added successfully";
        //this.alertify.success('Congrats, your property listed successfully on our website');
        this.router.navigate(['/products'])
       });
    }

  }

  // get methods for all form controls
  get f(){
    return this.createForm.controls;
  }
}
