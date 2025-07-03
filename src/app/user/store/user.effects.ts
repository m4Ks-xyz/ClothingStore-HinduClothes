import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { UserService } from '../services/user/user.service';
import { UserActions } from './user.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { Action } from '@ngrx/store';
import { TOKEN_STORAGE_KEY } from '../../auth/data-acces/config/api';
import { cartActions } from '../../cart/data-access/store/cart/cart.actions';

@Injectable()
export class UserEffects implements OnInitEffects {
	readonly #userService = inject(UserService);
	readonly #actions$ = inject(Actions);

	ngrxOnInitEffects(): Action {
		if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
			cartActions.getCartRequest();
			return UserActions.getUserProfile();
		}
		return UserActions.skipLoadingUserProfile();
	}

	readonly getUserProfile = createEffect(() =>
		this.#actions$.pipe(
			ofType(UserActions.getUserProfile),
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

	readonly logout = createEffect(
		() =>
			this.#actions$.pipe(
				ofType(UserActions.logout),
				tap(() => localStorage.removeItem(TOKEN_STORAGE_KEY)),
			),
		{ dispatch: false },
	);
}
