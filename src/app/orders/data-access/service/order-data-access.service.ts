import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../../auth/data-acces/config/api';
import { OrderRes } from '../../models/order-res.model';

@Injectable({
	providedIn: 'root',
})
export class OrderDataAccessService {
	readonly #httpClient = inject(HttpClient);
	readonly #BASE_URL_ORDER = `${BASE_API_URL}/api/orders`;

	private getHeader(): HttpHeaders {
		const token = localStorage.getItem(TOKEN_STORAGE_KEY);
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	createOrder(req: any) {
		return this.#httpClient.post<OrderRes>(
			this.#BASE_URL_ORDER,
			{ req: req },
			{ headers: this.getHeader() },
		);
	}

	getOrderById(orderId: string) {
		return this.#httpClient.get<OrderRes>(
			`${this.#BASE_URL_ORDER}/${orderId}`,
			{
				headers: this.getHeader(),
			},
		);
	}

	getOrderHistory() {
		return this.#httpClient.get<OrderRes[]>(`${this.#BASE_URL_ORDER}/user`, {
			headers: this.getHeader(),
		});
	}
}
