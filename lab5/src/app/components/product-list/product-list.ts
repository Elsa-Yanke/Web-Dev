import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  // ВАЖНО: события вверх
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  searchQuery = '';
  filteredProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.filteredProducts = this.products;
      this.searchQuery = '';
    }
  }

  filterProducts(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredProducts = q === ''
      ? this.products
      : this.products.filter(p => p.name.toLowerCase().includes(q));
  }

  onLike(id: number): void {
    this.likeProduct.emit(id);
  }

  onDelete(id: number): void {
    this.deleteProduct.emit(id);
  }
}