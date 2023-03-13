export interface IProduct {
  _id: string;
  name: string;
  price: number;
  components: string;
  description: string;
  image: string;
  cooking_time: string;
}

export interface IProductCreateUpdate {
  name: string;
  price: number;
  components: string;
  description: string;
  image: string;
  cooking_time: string;
}
