import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../../config/api';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../../../navbar/dialogs/types/user-credentials.model';
import { LoginResponseModel } from '../models/login-response.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	readonly #httpClient = inject(HttpClient);
	readonly #baseApiUrl = BASE_API_URL;

	login(userData: UserCredentials) {
		return this.#httpClient.post<LoginResponseModel>(
			`${this.#baseApiUrl}/auth/login`,
			userData,
		);
	}

	register(userData: UserCredentials) {
		return this.#httpClient.post<LoginResponseModel>(
			`${this.#baseApiUrl}/auth/signup`,
			userData,
		);
	}
}
