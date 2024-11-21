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
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  product!: IItem;

  constructor() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productsService.getProductById(productId).then((product) => {
      this.product = product;
    });
  }
}
