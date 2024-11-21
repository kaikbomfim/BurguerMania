import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:3000/products';

  constructor() { }

  async getAllProducts(): Promise<IItem[]> {
    const response = await fetch(this.url);
    return response.json();
  }

  async getProductById(id: number): Promise<IItem> {
    const response = await fetch(`${this.url}?id=${id}`);
    const products = await response.json();
    return products.length ? products[0] : undefined;
  }

  async getProductsByCategory(categoryId: number): Promise<IItem[]> {
    const response = await fetch(`${this.url}?category=${categoryId}`);
    return response.json();
  }
}
