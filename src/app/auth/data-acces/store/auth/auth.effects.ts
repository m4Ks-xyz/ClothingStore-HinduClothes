import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserActions } from '../../../../user/data-access/store/user.actions';
import { TOKEN_STORAGE_KEY } from '../../config/api';
import { cartActions } from '../../../../cart/data-access/store/cart/cart.actions';

@Injectable()
export class AuthEffects {
	readonly #authService = inject(AuthService);
	readonly #snackBar = inject(MatSnackBar);
	readonly #actions$ = inject(Actions);

	readonly login = createEffect(() =>
		this.#actions$.pipe(
			ofType(AuthActions.login),
			switchMap((actionPayload) => {
				return this.#authService.login(actionPayload.user).pipe(
					switchMap((res) => {
						return of(
							AuthActions.loginSuccess({
								user: { token: res.token, message: res.message },
							}),
						);
					}),
					tap(() =>
						this.#snackBar.open(`Login successfully`, undefined, {
							duration: 5000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-success'],
						}),
					),
					catchError((err) => {
						this.#snackBar.open(`${err.error.message}`, undefined, {
							duration: 5000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-error'],
						});
						return of(
							AuthActions.loginFailure({ errorMsg: err.error.message }),
						);
					}),
				);
			}),
		),
	);

	readonly saveToken = createEffect(
		() =>
			this.#actions$.pipe(
				ofType(AuthActions.loginSuccess, AuthActions.registerSuccess),
				switchMap((actionPayload) => {
					localStorage.setItem(
						TOKEN_STORAGE_KEY,
						JSON.stringify({
							token: actionPayload.user.token,
							expires: Date.now() + 48 * 60 * 60 * 1000,
						}),
					);
					return of();
				}),
			),
		{ dispatch: false },
	);

	readonly register = createEffect(() =>
		this.#actions$.pipe(
			ofType(AuthActions.register),
			switchMap((actionPayload) => {
				return this.#authService.register(actionPayload.user).pipe(
					switchMap((res) =>
						of(
							AuthActions.registerSuccess({
								user: { token: res.token, message: res.message },
							}),
							UserActions.getUserProfile(),
							cartActions.getCartRequest(),
						),
					),
					tap(() =>
						this.#snackBar.open(`Registered successfully`, undefined, {
							duration: 5000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-success'],
						}),
					),
					catchError((err) => {
						this.#snackBar.open(`${err.error.message}`, undefined, {
							duration: 5000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-error'],
						});

						return of(
							AuthActions.registerFailure({ errorMsg: err.error.error }),
						);
					}),
				);
			}),
		),
	);
}
