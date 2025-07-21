import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { UserService } from '../user.service';
import { UserActions } from './user.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { Action } from '@ngrx/store';
import { TOKEN_STORAGE_KEY } from '../../../auth/data-acces/config/api';
import { AuthActions } from '../../../auth/data-acces/store/auth/auth.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UserEffects implements OnInitEffects {
	readonly #userService = inject(UserService);
	readonly #actions$ = inject(Actions);
	readonly #snackBar = inject(MatSnackBar);

	ngrxOnInitEffects(): Action {
		if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
			return UserActions.getUserProfile();
		}
		return UserActions.skipLoadingUserProfile();
	}

	readonly getUserProfile = createEffect(() =>
		this.#actions$.pipe(
			ofType(UserActions.getUserProfile, AuthActions.loginSuccess),
			switchMap(() => {
				return this.#userService.getUserProfile().pipe(
					switchMap((user) => {
						return of(UserActions.getUserProfileSuccess({ userProfile: user }));
					}),
					catchError((err) => {
						return of(UserActions.getUserProfileFailure({ error: err }));
					}),
				);
			}),
		),
	);

	readonly editUserProfile = createEffect(() =>
		this.#actions$.pipe(
			ofType(UserActions.editUserProfile),
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
							of(UserActions.editUserProfileSuccess({ user: payload })),
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
							return of(UserActions.editUserProfileFailure({ error: err }));
						}),
					);
			}),
		),
	);

	readonly logout = createEffect(
		() =>
			this.#actions$.pipe(
				ofType(UserActions.logout),
				tap(() => localStorage.removeItem(TOKEN_STORAGE_KEY)),
			),
		{ dispatch: false },
	);
}
