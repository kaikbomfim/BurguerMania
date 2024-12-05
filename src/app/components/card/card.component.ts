import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IItem } from '../../interfaces/item';
import { RouterLink } from '@angular/router';
import { ReplaceDotWithCommaPipe } from '../../pipes/replace-dot-with-comma.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ReplaceDotWithCommaPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() itemData!: IItem;
  @Input() cardClass: 'primary' | 'secondary' = 'primary';
  @Input() showPrice: boolean = false; // Controla a exibição do preço

  generateLink(): string {
    // Se for um produto, redireciona para a página do produto
    if (this.itemData.categoryId) {
      return `/product/${this.itemData.id}`;
    }

    // Se for uma categoria, redireciona para a página de produtos dessa categoria
    return `/category/${this.itemData.id}`;
  }
}
