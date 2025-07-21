import { inject, Injectable } from '@angular/core';
import { CartDataAccessService } from '../../service/cart-data-access.service';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cartActions } from './cart.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { Action } from '@ngrx/store';
import { TOKEN_STORAGE_KEY } from '../../../../auth/data-acces/config/api';
import { UserActions } from '../../../../user/data-access/store/user.actions';
import { AuthActions } from '../../../../auth/data-acces/store/auth/auth.actions';

@Injectable()
export class CartEffects implements OnInitEffects {
	readonly #cartService = inject(CartDataAccessService);
	readonly #actions = inject(Actions);
	readonly #snackBar = inject(MatSnackBar);

	ngrxOnInitEffects(): Action {
		if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
			return cartActions.getCartRequest();
		}
		return UserActions.skipLoadingUserProfile();
	}

	readonly addItemToCart = createEffect(() =>
		this.#actions.pipe(
			ofType(cartActions.addItemToCart),
			switchMap((payload) => {
				return this.#cartService.addItemToCart(payload.data).pipe(
					switchMap((cart) =>
						of(cartActions.addItemToCartSuccess({ cart: cart })),
					),
					tap(() =>
						this.#snackBar.open(`Product added to cart`, undefined, {
							duration: 5000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-success'],
						}),
					),
					catchError((err) => {
						this.#snackBar.open(`Error: ${err.error}`, undefined, {
							duration: 5000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-error'],
						});
						return of(cartActions.addItemToCartFailure({ err: err.error }));
					}),
				);
			}),
		),
	);

	readonly getCart = createEffect(() =>
		this.#actions.pipe(
			ofType(
				cartActions.getCartRequest,
				cartActions.updateCartItemSuccess,
				cartActions.removeCartItemSuccess,
				AuthActions.loginSuccess,
			),
			switchMap(() => {
				return this.#cartService.getCart().pipe(
					switchMap((cart) =>
						of(cartActions.getCartRequestSuccess({ cart: cart })),
					),
					catchError((err) =>
						of(cartActions.getCartRequestFailure({ err: err.error })),
					),
				);
			}),
		),
	);

	readonly removeCartItem = createEffect(() =>
		this.#actions.pipe(
			ofType(cartActions.removeCartItem),
			switchMap((payload) => {
				return this.#cartService.removeCartItem(payload.id).pipe(
					switchMap(() =>
						of(cartActions.removeCartItemSuccess({ itemId: payload.id })),
					),

					catchError(function (err) {
						return of(cartActions.removeCartItemFailure({ err: err.error }));
					}),
				);
			}),
		),
	);

	readonly updateCartItem = createEffect(() =>
		this.#actions.pipe(
			ofType(cartActions.updateCartItem),
			switchMap((payload) => {
				return this.#cartService
					.updateCartItem({
						quantity: payload.quantity,
						cartItemId: payload.id,
					})
					.pipe(
						switchMap((item) =>
							of(cartActions.updateCartItemSuccess({ data: item })),
						),

						catchError((err) => {
							return of(cartActions.updateCartItemFailure({ err: err.error }));
						}),
					);
			}),
		),
	);
}
