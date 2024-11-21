import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/item';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = `${environment.apiUrl}/categories`;

  constructor() { }

  async getAllCategories(): Promise<IItem[]> {
    const response = await fetch(`${this.baseUrl}`);
    return response.json();
  }

  // async getCategoryById(id: Number): Promise<IItem | undefined> {
  //   const response = await fetch(`${this.url}/${id}`);
  //   return response.json() ?? {};
  // }

  async getCategoryById(id: number): Promise<IItem | undefined> {
    const response = await fetch(`${this.baseUrl}?id=${id}`);
    const categories = await response.json();
    return categories.length ? categories[0] : undefined;
  }


}
