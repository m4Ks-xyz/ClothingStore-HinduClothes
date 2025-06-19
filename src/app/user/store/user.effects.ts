import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user/user.service';
import { UserActions } from './user.actions';
import { catchError, of, switchMap } from 'rxjs';

@Injectable()
export class UserEffects {
	readonly #userService = inject(UserService);
	readonly #actions$ = inject(Actions);

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

	// nie chciało mi działać
	// readonly logout = createEffect(() =>
	// 	this.#actions$.pipe(
	// 		ofType(UserActions.logout),
	// 		tap(() => localStorage.removeItem(TOKEN_STORAGE_KEY)),
	// 	),
	// );
}
