import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: number;
  product: Product;
  updateForm: FormGroup;
  productSubmitted: boolean;
  displayMessage: string;
  upLoadedFile: any;

  constructor(
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService
              ) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.viewProduct(this.productId).subscribe((data: Product) => {
      this.product = data;
      this.updateForm.controls['productName'].setValue(this.product.productName);
      this.updateForm.controls['productDescription'].setValue(this.product.productDescription);
      this.updateForm.controls['productImage'].setValue(this.product.productImage);
      this.updateForm.controls['productPrice'].setValue(this.product.productPrice);
    });
    /*this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe((productData: Product) => {
        this.productDetails = productData;
      });
    });*/

    this.updateForm = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]),
      productDescription: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]),
      productImage: new FormControl(['', Validators.required]),
      productPrice: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
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
        this.updateForm.get('productImage').setValue(this.upLoadedFile);
        //console.log(this.upLoadedFile);
      };
    }

  get f(){
    return this.updateForm.controls;
  }

  onSubmit(){
    this.productSubmitted = true;
    if(this.updateForm.valid){
       this.productService.updateProduct(this.productId, this.updateForm.value).subscribe(data => {
        console.log(data);
        this.displayMessage = "Product updated successfully"
        this.router.navigate(['/products'])
      });
    }
  }
}
