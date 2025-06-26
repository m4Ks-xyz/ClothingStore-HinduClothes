import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../../auth/data-acces/config/api';
import { Store } from '@ngrx/store';
import { ProductsSearchResponse } from '../../models/products-search.response';
import { ProductModel } from '../../models/product.model';

export interface ProductParams {
	color?: string | null;
	sizes?: string | null;
	minPrice?: string | null;
	maxPrice?: string | null;
	minDiscount?: string | null;
	levelThree?: string | null;
	levelOne?: string | null;
	levelTwo?: string | null;
	stock?: string | null;
	sort?: string | null;
	pageNumber?: string | null;
	pageSize?: string | null;
}

@Injectable({
	providedIn: 'root',
})
export class ProductApiService {
	readonly #httpClient = inject(HttpClient);
	readonly #store = inject(Store);
	readonly #baseApiUrl = `${BASE_API_URL}/api`;

	private getHeader(): HttpHeaders {
		const token = localStorage.getItem(TOKEN_STORAGE_KEY);
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	findProductsByCategory(paramsData: ProductParams) {
		return this.#httpClient.get<ProductsSearchResponse>(
			`${this.#baseApiUrl}/products`,
			{
				headers: this.getHeader(),
				params: {
					...Object.entries(paramsData)
						.filter(([, value]) => !!value)
						.reduce((previousValue, currentValue) => {
							return { ...previousValue, [currentValue[0]]: currentValue[1] };
						}, {}),
				},
			},
		);
	}

	findProductsById(productId: string) {
		return this.#httpClient.get<ProductModel>(
			`${this.#baseApiUrl}/products/id/${productId}`,
			{
				headers: this.getHeader(),
			},
		);
	}
}
