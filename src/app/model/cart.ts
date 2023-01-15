import { Product } from "./product";

export interface Cart {
    id: number,
    total: number,
    products: Array<Product>
}