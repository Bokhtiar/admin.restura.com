export interface IProduct {
  _id: string;
  name: string;
  price: number;
  ingredient: [];
  category: [];
  description: string;
  image: string;
  cooking_time: string;
}

export interface IProductCreateUpdate {
  name: string;
  price: number;
  ingredient: [];
  category: [];
  description: string;
  image: string;
  cooking_time: string;
}
