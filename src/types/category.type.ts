export interface ICategory {
    _id: string;
    name: string;
    icon: string;
}

export interface ICategoryCreateUpdate {
    name: string;
    icon: string;
}
