import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro 256GB',
      description: 'Apple smartphone with powerful performance and advanced cameras.',
      price: 699000,
      rating: 4.9,
      image: 'assets/pics/iphone15pro.jpg',
      images: [
        'assets/pics/iphone15pro.jpg',
        'assets/pics/iphone15pro.jpg',
        'assets/pics/iphone15pro.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-109317445/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Android smartphone with excellent camera.',
      price: 549000,
      rating: 4.8,
      image: 'assets/pics/s24.jpg',
      images: [
        'assets/pics/s24.jpg',
        'assets/pics/s24.jpg',
        'assets/pics/s24.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      description: 'Lightweight laptop with Apple M2 chip.',
      price: 899000,
      rating: 4.9,
      image: 'assets/pics/macbook.jpg',
      images: [
        'assets/pics/macbook.jpg',
        'assets/pics/macbook.jpg',
        'assets/pics/macbook.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 4,
      name: 'iPad Pro 12.9',
      description: 'Powerful tablet with Liquid Retina display.',
      price: 799000,
      rating: 4.7,
      image: 'assets/pics/ipad.jpg',
      images: [
        'assets/pics/ipad.jpg',
        'assets/pics/ipad.jpg',
        'assets/pics/ipad.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      description: 'Noise cancelling wireless headphones.',
      price: 199000,
      rating: 4.8,
      image: 'assets/pics/sony.jpg',
      images: [
        'assets/pics/sony.jpg',
        'assets/pics/sony.jpg',
        'assets/pics/sony.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with health tracking.',
      price: 249000,
      rating: 4.6,
      image: 'assets/pics/watch.jpg',
      images: [
        'assets/pics/watch.jpg',
        'assets/pics/watch.jpg',
        'assets/pics/watch.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 7,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console with 4K support.',
      price: 329000,
      rating: 4.9,
      image: 'assets/pics/ps5.jpg',
      images: [
        'assets/pics/ps5.jpg',
        'assets/pics/ps5.jpg',
        'assets/pics/ps5.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 8,
      name: 'Dell XPS 13',
      description: 'Compact ultrabook with great performance.',
      price: 749000,
      rating: 4.7,
      image: 'assets/pics/dell.jpg',
      images: [
        'assets/pics/dell.jpg',
        'assets/pics/dell.jpg',
        'assets/pics/dell.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 9,
      name: 'Canon EOS R6',
      description: 'Professional mirrorless camera.',
      price: 1199000,
      rating: 4.9,
      image: 'assets/pics/canon.jpg',
      images: [
        'assets/pics/canon.jpg',
        'assets/pics/canon.jpg',
        'assets/pics/canon.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 10,
      name: 'Xiaomi Mi Band 8',
      description: 'Affordable fitness tracker.',
      price: 29900,
      rating: 4.5,
      image: 'assets/pics/miband.jpg',
      images: [
        'assets/pics/miband.jpg',
        'assets/pics/miband.jpg',
        'assets/pics/miband.jpg'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 11,
      name: 'ASUS ROG Strix',
      description: 'High-performance gaming laptop.',
      price: 1299000,
      rating: 4.8,
      image: 'assets/pics/rog.jpg',
      images: [
        'assets/pics/rog.jpg',
        'assets/pics/rog.jpg',
        'assets/pics/rog.jpg'
      ],
      link: 'https://kaspi.kz'
    }
  ];
}
