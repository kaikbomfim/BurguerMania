import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';
import { InputComponent } from '../../components/input/input.component';
import { OrdersService, IOrder } from '../../services/orders/orders.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleComponent, ButtonComponent, InputComponent],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  private ordersService = inject(OrdersService);

  // Modelos de dados para o formulário
  product1: string = '';
  quantity1: number = 0;
  product2: string = '';
  quantity2: number = 0;
  observation: string = '';

  async finalizeOrder() {
    // Criação do pedido baseado nos dados preenchidos
    const order: IOrder = {
      statusId: 1, // Supondo que o status inicial é 1 (Ajustar conforme necessário)
      value: 100,  // Substituir pelo cálculo correto do valor
      observation: this.observation
    };

    try {
      const newOrder = await this.ordersService.createOrder(order);
      console.log('Pedido criado com sucesso:', newOrder);
      // Exibir mensagem de sucesso ou redirecionar conforme necessário
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
    }
  }
}
