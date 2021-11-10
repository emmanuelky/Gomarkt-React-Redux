
export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    image: string;
    price: number;
    title: string;
    description: string;
    rating: Rating;
    category: string


}

export interface ReduxStore {
    products: {
        all_products: Product[];
        loading: boolean;
        cart: Product[],
    }
}
