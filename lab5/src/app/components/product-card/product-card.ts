import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;


  @Output() favorite = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();     // передаём id товара
  @Output() delete = new EventEmitter<number>();   // передаём id товара

  onFavoriteClick(): void {
  this.favorite.emit(this.product.id);
  }

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    const ok = confirm(`Delete "${this.product.name}"?`);
    if (ok) this.delete.emit(this.product.id);
  }

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}