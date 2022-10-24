export interface IProductCreateRequest {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
