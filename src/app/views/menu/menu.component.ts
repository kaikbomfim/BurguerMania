import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';
import { CardComponent } from '../../components/card/card.component';
import { IItem } from '../../interfaces/item';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, ButtonComponent, TitleComponent, CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  categoryList: IItem[] = [];
  private categoryService = inject(CategoriesService);

  ngOnInit(): void {
    this.loadCategories();
  }

  async loadCategories() {
    try {
      this.categoryList = await this.categoryService.getAllCategories();
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  }
}
