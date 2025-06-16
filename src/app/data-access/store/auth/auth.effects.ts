import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthEffects {
	readonly #authService = inject(AuthService);

	readonly #_actions$ = inject(Actions);
}
