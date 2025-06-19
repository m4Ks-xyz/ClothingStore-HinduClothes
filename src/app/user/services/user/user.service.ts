import { inject, Injectable } from '@angular/core';
import {
	BASE_API_URL,
	TOKEN_STORAGE_KEY,
} from '../../../auth/data-acces/config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfileModel } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { UserActions } from '../../store/user.actions';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	readonly #httpClient = inject(HttpClient);
	readonly #apiUrl = `${BASE_API_URL}/api`;
	readonly #store = inject(Store);

	getUserProfile() {
		const token = localStorage.getItem(TOKEN_STORAGE_KEY);
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.#httpClient.get<UserProfileModel>(
			`${this.#apiUrl}/users/profile`,
			{
				headers,
			},
		);
	}

	logout() {
		localStorage.removeItem(TOKEN_STORAGE_KEY);
		this.#store.dispatch(UserActions.logout());
	}
}
