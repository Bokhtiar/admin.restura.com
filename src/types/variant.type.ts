
type productType = {
  _id: string;
  name:string;
  price:string;
  image:string;
}

export interface IVariant {
  _id: string;
  name: string;
  price: number;
  image: string;
  product: productType | null;
}

export interface IVariantCreateUpdate {
  name: string;
  price: number;
  image: string;
  product: productType | null;
}
