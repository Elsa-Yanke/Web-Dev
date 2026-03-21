import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductListComponent } from './components/product-list/product-list';

// важно: путь к данным в data/
import { CATEGORIES } from './data/categories';   // или './data/category' как у тебя называется
import { PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  products: Product[] = PRODUCTS;
  favorites: Product[] = [];

  selectedCategoryId: number | null = null;

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }

handleDelete(id: number): void {
  // удаляем из общего массива
  this.products = this.products.filter(p => p.id !== id);
}

handleLike(id: number): void {
  // увеличиваем likes в общем массиве
  for (let i = 0; i < this.products.length; i++) {
    if (this.products[i].id === id) {
      this.products[i].likes++;
      break;
    }
  }
}

toggleFavorite(productId: number): void {
  const product = this.products.find(p => p.id === productId);
  if (!product) return;

  product.isFavorite = !product.isFavorite;
  this.favorites = this.products.filter(p => p.isFavorite);
}

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }
}