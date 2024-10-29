import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() productAdded = new EventEmitter<void>(); // Evento que indica que se añadió un producto
  product: Product = { id: 0, name: '', description: '', price: 0 };

  constructor(private productService: ProductService) {}

  onSubmit(): void {
    this.productService.addProduct(this.product);
    this.productAdded.emit(); // Emite el evento para notificar que se añadió un producto
    this.resetForm();
  }

  resetForm(): void {
    this.product = { id: 0, name: '', description: '', price: 0 };
  }
}
