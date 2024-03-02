export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    subscribed: boolean,
    premium: boolean,
}

export interface IProduct {
    id: string,
    name: string,
    description: string,
    category: ICategory,
    stock: boolean,
}

export interface ICategory {
    id: string,
    name: string,
    businessArea: string,
}

export interface IKart {
    id: string;
    lineKart: ILineKart[],
}

export interface ILineKart {
    id: string,
    product: IProduct,
    quantity: number,
    price: number,
    discount: number,
}

