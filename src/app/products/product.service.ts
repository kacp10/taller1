import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private nextId = 1; // Variable para manejar IDs automáticos

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
    product.id = this.nextId++; // Asigna un ID único
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
