import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../../auth/data-acces/config/api';
import { OrderRes } from '../../models/order-res.model';
import { Address } from '../../../checkout/models/address.model';

@Injectable({
	providedIn: 'root',
})
export class OrderDataAccessService {
	readonly #httpClient = inject(HttpClient);
	readonly #BASE_URL_ORDER = `${BASE_API_URL}/api/orders`;

	private getHeader(): HttpHeaders {
		const tokenString = localStorage.getItem(TOKEN_STORAGE_KEY);
		const token = tokenString ? JSON.parse(tokenString).token : '';
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	createOrder(shippingAddress: Address) {
		return this.#httpClient.post<OrderRes>(
			this.#BASE_URL_ORDER,
			{ shippingAddress: shippingAddress },
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

	payOrder(id: string) {
		return this.#httpClient.post<OrderRes>(
			`${this.#BASE_URL_ORDER}/${id}/pay`,
			{},
			{
				headers: this.getHeader(),
			},
		);
	}
}
