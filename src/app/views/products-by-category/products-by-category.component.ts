import { Component, inject, OnInit } from '@angular/core';
import { IItem } from '../../interfaces/item';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { error } from 'console';
import { CategoriesService } from '../../services/categories/categories.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';


@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent, TitleComponent],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.css'
})
export class ProductsByCategoryComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private categoriesService = inject(CategoriesService);

  products: IItem[] = [];
  categoryName: string = '';

  constructor() {
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.productsService.getProductsByCategory(categoryId).then((products) => {
      this.products = products;
    });

    this.categoriesService.getCategoryById(categoryId).then((category) => {
      if (category) {
        this.categoryName = category.name;
      }
    });
  }
}
