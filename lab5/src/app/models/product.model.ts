export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;       // url картинки
  link: string;        // kaspi.kz link
  categoryId: number;  // связь с категорией
  likes: number;   
  rating:number;    // старт 0
}