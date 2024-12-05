import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/item';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = `${environment.apiUrl}/category`;

  constructor() { }

  async getAllCategories(): Promise<IItem[]> {
    const response = await fetch(`${this.baseUrl}`);
    const data = await response.json();

    return data.categories;
  }

  async getCategoryById(id: number): Promise<IItem | undefined> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();

    return data.category;
  }


}
