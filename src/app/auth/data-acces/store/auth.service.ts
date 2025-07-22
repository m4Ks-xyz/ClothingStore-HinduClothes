import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../../dialogs/types/user-credentials.model';
import { AuthResponseModel } from '../../models/auth-response.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	readonly #httpClient = inject(HttpClient);
	readonly #baseApiUrl = `${BASE_API_URL}/auth`;

	login(userData: UserCredentials) {
		return this.#httpClient.post<AuthResponseModel>(
			`${this.#baseApiUrl}/login`,
			userData,
		);
	}

	register(userData: UserCredentials) {
		return this.#httpClient.post<AuthResponseModel>(
			`${this.#baseApiUrl}/signup`,
			userData,
		);
	}
}
