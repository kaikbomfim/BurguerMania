import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TitleComponent } from '../../components/title/title.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { IItem } from '../../interfaces/item';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../../components/description/description.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, DescriptionComponent, TitleComponent, ButtonComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'] // Correção: 'styleUrls' no plural
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  product?: IItem; // Tornar a propriedade opcional (pode ser 'undefined' inicialmente)

  constructor() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productsService.getProductById(productId).then((product) => {
      if (product) {
        this.product = product;
      } else {
        console.error('Produto não encontrado.');
        // Aqui você pode adicionar uma ação adicional, como redirecionar para uma página de erro.
      }
    });
  }
}
