import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { ProductsByCategoryComponent } from './views/products-by-category/products-by-category.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { OrderComponent } from './views/order/order.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'BurguerMania' },
    { path: 'menu', component: MenuComponent, title: 'Cardápio' },
    { path: 'order', component: OrderComponent, title: 'Pedido' },
    { path: 'not-found', component: NotFoundComponent, title: 'Página não encontrada' },
    { path: 'categories/:id', component: ProductsByCategoryComponent, title: 'Categoria' },
    { path: 'products/:id', component: ProductDetailComponent, title: 'Detalhes' },
];
