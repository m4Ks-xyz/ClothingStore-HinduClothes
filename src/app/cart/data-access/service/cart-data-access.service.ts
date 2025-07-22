import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../../auth/data-acces/config/api';
import { AddItemToCartReq } from '../../models/add-item-to-cart-req.model';
import { Cart } from '../../models/cart.model';
import { CartItem } from '../../models/cart-item.model';

@Injectable({
	providedIn: 'root',
})
export class CartDataAccessService {
	readonly #httpClient = inject(HttpClient);
	readonly #BASE_API_URL_CART = `${BASE_API_URL}/api/cart`;

	private getHeader(): HttpHeaders {
		const tokenString = localStorage.getItem(TOKEN_STORAGE_KEY);
		const token = tokenString ? JSON.parse(tokenString).token : '';
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	addItemToCart(itemData: AddItemToCartReq) {
		return this.#httpClient.put<Cart>(
			`${this.#BASE_API_URL_CART}/add`,
			{
				size: itemData.size,
				quantity: itemData.quantity,
				productId: itemData.productId,
			},
			{
				headers: this.getHeader(),
			},
		);
	}

	getCart() {
		return this.#httpClient.get<Cart>(this.#BASE_API_URL_CART, {
			headers: this.getHeader(),
		});
	}

	removeCartItem(id: string) {
		return this.#httpClient.delete<{ message: string }>(
			`${this.#BASE_API_URL_CART}-item/${id}`,
			{ headers: this.getHeader() },
		);
	}

	updateCartItem(data: { quantity: number; cartItemId: string }) {
		return this.#httpClient.put<CartItem>(
			`${this.#BASE_API_URL_CART}-item/${data.cartItemId}`,
			{ quantity: data.quantity },
			{
				headers: this.getHeader(),
			},
		);
	}
}
