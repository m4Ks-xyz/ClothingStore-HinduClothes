import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { catchError, of, switchMap } from 'rxjs';

@Injectable()
export class AuthEffects {
	readonly #authService = inject(AuthService);

	readonly #actions$ = inject(Actions);

	readonly login = createEffect(() =>
		this.#actions$.pipe(
			ofType(AuthActions.login),
			switchMap((actionPayload) => {
				return this.#authService.login(actionPayload.user).pipe(
					switchMap((res: any) =>
						of(AuthActions.loginSuccess({ user: res.user })),
					),
					catchError((err) => {
						console.log(`An error occurred when logging in`);
						return of(AuthActions.loginFailure({ errorMsg: err.message }));
					}),
				);
			}),
		),
	);
}
