import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface IOrder {
    id?: number; // ID do pedido (opcional para criação)
    statusId: number;
    value: number;
    observation?: string;
}

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    private baseUrl = `${environment.apiUrl}/order`;

    constructor() { }

    async getAllOrders(): Promise<IOrder[]> {
        const response = await fetch(`${this.baseUrl}`);
        const data = await response.json();

        return data.orders;
    }

    async getOrderById(id: number): Promise<IOrder | undefined> {
        const response = await fetch(`${this.baseUrl}/${id}`);
        const data = await response.json();

        return data.order;
    }

    async createOrder(order: IOrder): Promise<IOrder> {
        const response = await fetch(`${this.baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        const data = await response.json();

        return data.order;
    }

    async updateOrder(id: number, order: IOrder): Promise<IOrder> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        const data = await response.json();

        return data.order;
    }

    async deleteOrder(id: number): Promise<void> {
        await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}
