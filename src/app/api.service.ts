import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
	private baseUrl = import.meta.env.NG_APP_BACKEND_URL;
}
