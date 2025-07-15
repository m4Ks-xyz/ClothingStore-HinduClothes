import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../../auth/data-acces/config/api';
import { ProductsSearchResponseModel } from '../../models/products-search.response.model';
import { ProductModelRes } from '../../models/product.model';
import { Review } from '../../../auth/models/review.model';

export interface ProductParams {
	color?: string | null;
	sizes?: string | null;
	minPrice?: number | null;
	maxPrice?: number | null;
	minDiscount?: string | null;
	levelThree?: string | null;
	levelOne?: string | null;
	levelTwo?: string | null;
	stock?: string | null;
	sort?: string | null;
	pageNumber?: number | null;
	pageSize?: number | null;
}

@Injectable({
	providedIn: 'root',
})
export class ProductApiService {
	readonly #httpClient = inject(HttpClient);
	readonly #baseApiUrl = `${BASE_API_URL}/api`;

	private getHeader(): HttpHeaders {
		const tokenString = localStorage.getItem(TOKEN_STORAGE_KEY);
		const token = tokenString ? JSON.parse(tokenString).token : '';
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	findProductsByCategory(paramsData: ProductParams) {
		return this.#httpClient.get<ProductsSearchResponseModel>(
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
		return this.#httpClient.get<ProductModelRes>(
			`${this.#baseApiUrl}/products/id/${productId}`,
			{
				headers: this.getHeader(),
			},
		);
	}

	getProductReviews(productId: string) {
		return this.#httpClient.get<Review[]>(
			`${this.#baseApiUrl}/reviews/product/${productId}`,
			{
				headers: this.getHeader(),
			},
		);
	}

	addProductReview(data: { productId: string; review: string }) {
		return this.#httpClient.post<{ review: Review[] }>(
			`${this.#baseApiUrl}/reviews/create`,
			{
				data,
			},
			{
				headers: this.getHeader(),
			},
		);
	}
}
