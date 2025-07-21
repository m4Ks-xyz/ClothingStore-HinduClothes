import { inject, Injectable } from '@angular/core';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../auth/data-acces/config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfileModel } from '../models/user.model';
import { Store } from '@ngrx/store';
import { UserActions } from './store/user.actions';
import { UserEditReq } from './user-edit-req.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	readonly #httpClient = inject(HttpClient);
	readonly #apiUrl = `${BASE_API_URL}/api`;
	readonly #store = inject(Store);

	private getHeader(): HttpHeaders {
		const tokenString = localStorage.getItem(TOKEN_STORAGE_KEY);
		const token = tokenString ? JSON.parse(tokenString).token : '';
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	getUserProfile() {
		const tokenString = localStorage.getItem(TOKEN_STORAGE_KEY);
		const token = tokenString ? JSON.parse(tokenString).token : '';
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.#httpClient.get<UserProfileModel>(
			`${this.#apiUrl}/users/profile`,
			{
				headers,
			},
		);
	}

	editUserProfile(data: UserEditReq) {
		return this.#httpClient.patch<UserProfileModel>(
			`${this.#apiUrl}/users/me`,
			data,
			{
				headers: this.getHeader(),
			},
		);
	}

	logout() {
		this.#store.dispatch(UserActions.logout());
	}
}
