import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/item';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `${environment.apiUrl}/products`;

  constructor() { }

  async getAllProducts(): Promise<IItem[]> {
    const response = await fetch(`${this.baseUrl}`);
    return response.json();
  }

  async getProductById(id: number): Promise<IItem> {
    const response = await fetch(`${this.baseUrl}?id=${id}`);
    const products = await response.json();
    return products.length ? products[0] : undefined;
  }

  async getProductsByCategory(categoryId: number): Promise<IItem[]> {
    const response = await fetch(`${this.baseUrl}?category=${categoryId}`);
    return response.json();
  }
}
