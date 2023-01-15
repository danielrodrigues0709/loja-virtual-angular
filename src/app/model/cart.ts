import { Product } from "./product";

export interface Cart {
    total: number,
    products: Array<Product>
}