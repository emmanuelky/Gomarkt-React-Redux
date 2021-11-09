
export interface Rating {
    rate: number;
    count: number;
    price: number;
}

export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    rating: Rating;


}

export interface ReduxStore {
    products: {
        all_products: Product[];
        loading: boolean;
        cart: Product[],
    }
}
