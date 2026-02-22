import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  // Smartphones (categoryId: 1)
  {
    id: 101,
    name: 'Apple iPhone 16 128GB Black',
    price: 699000,
    description: 'Latest Apple smartphone with A18 chip and improved cameras.',
    image: 'assets/pics/iphone15pro.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    categoryId: 1,
    likes: 12,
    rating: 4.9
  },
  {
    id: 102,
    name: 'Samsung Galaxy A07 6/128GB Lavender',
    price: 119000,
    description: 'Affordable Samsung smartphone with large display and good battery.',
    image: 'assets/pics/s24.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000',
    categoryId: 1,
    likes: 3,
    rating: 4.5
  },
  {
    id: 103,
    name: 'Realme Note 70 6/128GB Gold',
    price: 99000,
    description: 'Budget-friendly smartphone with modern design and solid performance.',
    image: 'assets/pics/realme.jpg',
    link: 'https://kaspi.kz/shop/p/realme-note-70-6-gb-128-gb-zolotistyi-145564514/?c=750000000',
    categoryId: 1,
    likes: 43,
    rating: 4.3
  },
  {
    id: 104,
    name: 'iPhone 11 Pro Max Matte Glass',
    price: 406,
    description: 'Protective AG matte glass for iPhone 11 Pro Max.',
    image: 'assets/pics/glass.jpg',
    link: 'https://kaspi.kz/shop/p/steklo-dlja-apple-iphone-11-pro-max-ag-matte-glass-chernyi-143096947/?c=750000000',
    categoryId: 1,
    likes: 7,
    rating: 4.7
  },
  {
    id: 105,
    name: 'Apple 20W USB-C Power Adapter',
    price: 11900,
    description: 'Original Apple 20W fast charging adapter.',
    image: 'assets/pics/adapter.jpg',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    categoryId: 1,
    likes: 34,
    rating: 4.8
  },

  // Laptops (categoryId: 2)
  {
    id: 201,
    name: 'Apple MacBook Air 13 (2020) 8/256GB MGN63RU/A',
    price: 330000,
    description: 'Lightweight laptop for study and work (MacBook Air 2020).',
    image: 'assets/pics/macbook.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    categoryId: 2,
    likes: 34,
    rating: 4.9
  },
  {
    id: 202,
    name: 'ASUS ROG Strix G16 16/512GB (No OS) 90NR0N71-M001J0',
    price: 789000,
    description: 'Gaming laptop with high performance (ROG Strix G16).',
    image: 'assets/pics/rog.jpg',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-bez-os-90nr0n71-m001j0-144690023/?c=750000000',
    categoryId: 2,
    likes: 53,
    rating: 4.8
  },
  {
    id: 203,
    name: 'Dell XPS 13 9345 16/512GB Win 11 (210-BMTR)',
    price: 749000,
    description: 'Premium ultrabook with compact design (Dell XPS 13).',
    image: 'assets/pics/dell.jpg',
    link: 'https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000',
    categoryId: 2,
    likes: 15,
    rating: 4.7
  },
  {
    id: 204,
    name: 'Lenovo IdeaPad 3 15.6 8/256GB DOS (15IGL05 81WQ00ERRK)',
    price: 239000,
    description: 'Budget laptop for everyday tasks (IdeaPad 3).',
    image: 'assets/pics/lenovo.jpg',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    categoryId: 2,
    likes: 64,
    rating: 4.2
  },
  {
    id: 205,
    name: 'HP Pavilion 15.6 16/1024GB Win 11 (15-eh3000ci 7P437EA)',
    price: 579000,
    description: 'Powerful laptop for work/study (HP Pavilion).',
    image: 'assets/pics/hp.jpg',
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-1024-gb-win-11-home-15-eh3000ci-7p437ea-118476602/?c=750000000',
    categoryId: 2,
    likes: 31,
    rating: 4.4
  },

  // Headphones (categoryId: 3)
  {
    id: 301,
    name: 'Sony WH-1000XM5 Black',
    price: 135000,
    description: 'Premium noise-cancelling wireless headphones.',
    image: 'assets/pics/sony.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    categoryId: 3,
    likes: 85,
    rating: 4.9
  },
  {
    id: 302,
    name: 'Air Pro 2 White',
    price: 29900,
    description: 'Wireless earbuds with compact case (Air Pro 2).',
    image: 'assets/pics/pods2.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000',
    categoryId: 3,
    likes: 32,
    rating: 4.6
  },
  {
    id: 303,
    name: 'Samsung Galaxy Buds FE White',
    price: 49900,
    description: 'Wireless earbuds by Samsung (Buds FE).',
    image: 'assets/pics/sam_naush.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-fe-belyi-114022026/?c=750000000',
    categoryId: 3,
    likes: 87,
    rating: 4.7
  },
  {
    id: 304,
    name: 'Xiaomi Mi In-Ear Headphones Basic Silver',
    price: 15900,
    description: 'Wired in-ear headphones (basic model).',
    image: 'assets/pics/xiami.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-mi-in-ear-headphones-basic-serebristyi-4804216/?c=750000000',
    categoryId: 3,
    likes: 23,
    rating: 4.4
  },
  {
    id: 305,
    name: 'Xiaomi Redmi Buds 5 Black',
    price: 22900,
    description: 'Wireless earbuds with good battery life (Redmi Buds 5).',
    image: 'assets/pics/buds_redmi.jpg',
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-5-chernyi-113969806/?c=750000000',
    categoryId: 3,
    likes: 45,
    rating: 4.5
  },

  // Watches (categoryId: 4)
  {
    id: 401,
    name: 'Apple Watch Series 10 (S/M) 42mm',
    price: 249000,
    description: 'Apple Watch Series 10 with fitness and health features.',
    image: 'assets/pics/watch.jpg',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-cherno-sinii-128578467/?c=750000000',
    categoryId: 4,
    likes: 93,
    rating: 4.7
  },
  {
    id: 402,
    name: 'Xiaomi Mi Band 7 Black',
    price: 29900,
    description: 'Affordable fitness tracker with AMOLED display.',
    image: 'assets/pics/miband.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000',
    categoryId: 4,
    likes: 32,
    rating: 4.5
  },
  {
    id: 403,
    name: 'Samsung Galaxy Watch6 44mm Graphite',
    price: 179000,
    description: 'Stylish smartwatch with health monitoring and sports tracking.',
    image: 'assets/pics/sam_watch.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-44-mm-grafitovyi-chernyi-112368202/?c=750000000',
    categoryId: 4,
    likes: 64,
    rating: 4.6
  },
  {
    id: 404,
    name: 'Huawei Watch GT 4',
    price: 139000,
    description: 'Smartwatch with long battery life.',
    image: 'assets/pics/miband.jpg',
    link: 'PASTE_KASPI_LINK',
    categoryId: 4,
    likes: 54,
    rating: 4.4
  },
  {
    id: 405,
    name: 'Amazfit GTS 3 44mm Black',
    price: 119000,
    description: 'Smartwatch with sport tracking and AMOLED display.',
    image: 'assets/pics/amazfit.jpg',
    link: 'https://kaspi.kz/shop/p/amazfit-gts-3-44-mm-chernyi-chernyi-102692901/?c=750000000',
    categoryId: 4,
    likes: 23,
    rating: 4.5
  }
];  