export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;       // url картинки
  link: string;        // kaspi.kz link
  categoryId: number;  
  likes: number;   
  rating:number;
  isFavorite: boolean;
}