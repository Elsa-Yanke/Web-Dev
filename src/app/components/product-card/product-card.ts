import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

shareWhatsApp() {
  const url = encodeURIComponent(this.product.link);
  window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
}

shareTelegram() {
  const url = encodeURIComponent(this.product.link);
  const text = encodeURIComponent(this.product.name);
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

}
