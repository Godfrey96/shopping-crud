import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = 'http://localhost:3000/products';

constructor(private httpClient: HttpClient) { }

getAllProducts(): Observable<Product[]>{
  return this.httpClient.get<Product[]>(this.productURL);
}

createProduct(product: Product): Observable<Product[]>{
  return this.httpClient.post<Product[]>(this.productURL, product, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}

viewProduct(productId): Observable<Product>{
  return this.httpClient.get<Product>(`${this.productURL}/${productId}`);
}

updateProduct(productId, product): Observable<Product>{
  return this.httpClient.put<Product>(`${this.productURL}/${productId}`, product, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}

deleteProduct(productId: number): Observable<Product>{
  return this.httpClient.delete<Product>(`${this.productURL}/${productId}`);
}

}
