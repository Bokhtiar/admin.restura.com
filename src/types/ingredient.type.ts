export interface IIngredient {
  _id: string;
  name: string;
  icon: string;
}

export interface IIngredientCreateUpdate {
  name: string;
  icon: string;
}
