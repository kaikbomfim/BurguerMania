import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:3000/categories';

  constructor() { }

  async getAllCategories(): Promise<IItem[]> {
    const response = await fetch(this.url);
    return response.json();
  }

  // async getCategoryById(id: Number): Promise<IItem | undefined> {
  //   const response = await fetch(`${this.url}/${id}`);
  //   return response.json() ?? {};
  // }

  async getCategoryById(id: number): Promise<IItem | undefined> {
    const response = await fetch(`${this.url}?id=${id}`);
    const categories = await response.json();
    return categories.length ? categories[0] : undefined;
  }


}
