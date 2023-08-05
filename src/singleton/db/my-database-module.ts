// A typescript module can be considered a singleton

import { Product } from "../interfaces/product";

const products: Product[] = [];

export const MyDatabaseModule = {
  add(product: Product): void {
    products.push(product);
  },

  remove(index: number): void {
    products.splice(index, 1);
  },

  show(): void {
    for (const product of products) {
      console.log(product);
    }
  },
};
