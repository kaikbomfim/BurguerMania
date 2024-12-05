import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/item';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `${environment.apiUrl}/product`;

  constructor() { }

  // Método para obter todos os produtos
  async getAllProducts(): Promise<IItem[]> {
    const response = await fetch(`${this.baseUrl}`);
    const data = await response.json();

    // A resposta do backend é um objeto que contém a propriedade "products"
    return data.products;
  }

  // Método para obter um produto por ID
  async getProductById(id: number): Promise<IItem | undefined> {
    // Ajustando a URL para corresponder ao endpoint definido no backend: /product/{id}
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();

    // A resposta do backend é um objeto que contém a propriedade "product"
    return data.product;
  }

  // Método para obter produtos por categoria, filtrando no frontend
  async getProductsByCategory(categoryId: number): Promise<IItem[]> {
    // Primeiro, obtemos todos os produtos
    const products = await this.getAllProducts();

    // Depois filtramos localmente os produtos pela categoria
    return products.filter(product => product.categoryId === categoryId);
  }
}
