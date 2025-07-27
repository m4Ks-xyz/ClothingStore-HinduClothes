import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { UserService } from '../user.service';
import { userActions } from './user.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { TOKEN_STORAGE_KEY } from '../../../auth/data-acces/config/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from '@ngrx/store';
import { authActions } from '../../../auth/data-acces/store/auth.actions';
import { orderActions } from '../../../orders/data-access/store/order.actions';

@Injectable()
export class UserEffects implements OnInitEffects {
	readonly #userService = inject(UserService);
	readonly #actions$ = inject(Actions);
	readonly #snackBar = inject(MatSnackBar);

	ngrxOnInitEffects(): Action {
		if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
			return userActions.getUserProfile();
		}
		return userActions.skipLoadingUserProfile();
	}

	readonly getUserProfile = createEffect(() =>
		this.#actions$.pipe(
			ofType(
				userActions.getUserProfile,
				authActions.loginSuccess,
				orderActions.createOrderRequestSuccess,
			),
			switchMap(() => {
				return this.#userService.getUserProfile().pipe(
					switchMap((user) => {
						return of(userActions.getUserProfileSuccess({ userProfile: user }));
					}),
					catchError((err) => {
						return of(userActions.getUserProfileFailure({ error: err }));
					}),
				);
			}),
		),
	);

	readonly editUserProfile = createEffect(() =>
		this.#actions$.pipe(
			ofType(userActions.editUserProfile),
			switchMap((payload) => {
				return this.#userService
					.editUserProfile({
						avatarImg: payload.avatarImg,
						currentPassword: payload.currentPassword,
						newPassword: payload.newPassword,
						email: payload.email,
						deleteAddressId: payload.deleteAddressId,
					})
					.pipe(
						switchMap((payload) =>
							of(userActions.editUserProfileSuccess({ user: payload })),
						),
						tap(() =>
							this.#snackBar.open(`User updated successfully`, undefined, {
								duration: 5000,
								verticalPosition: 'bottom',
								horizontalPosition: 'end',
								panelClass: ['snackbar-success'],
							}),
						),
						catchError((err) => {
							const errorMessage =
								err?.error?.error || 'An unexpected error occurred';

							this.#snackBar.open(errorMessage, undefined, {
								duration: 5000,
								verticalPosition: 'bottom',
								horizontalPosition: 'end',
								panelClass: ['snackbar-error'],
							});
							return of(userActions.editUserProfileFailure({ error: err }));
						}),
					);
			}),
		),
	);

	readonly logout = createEffect(
		() =>
			this.#actions$.pipe(
				ofType(userActions.logout),
				tap(() => localStorage.removeItem(TOKEN_STORAGE_KEY)),
			),
		{ dispatch: false },
	);
}
