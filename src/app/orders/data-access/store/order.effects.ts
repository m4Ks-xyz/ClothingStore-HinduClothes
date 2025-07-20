import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { orderActions } from './order.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { OrderDataAccessService } from '../service/order-data-access.service';
import { Action } from '@ngrx/store';
import { TOKEN_STORAGE_KEY } from '../../../auth/data-acces/config/api';
import { UserActions } from '../../../user/data-access/store/user.actions';
import { AuthActions } from '../../../auth/data-acces/store/auth/auth.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class OrderEffects implements OnInitEffects {
	readonly #actions = inject(Actions);
	readonly #orderService = inject(OrderDataAccessService);
	readonly #router = inject(Router);
	readonly #snackBar = inject(MatSnackBar);

	ngrxOnInitEffects(): Action {
		if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
			return orderActions.getOrderHistoryRequest();
		}
		return UserActions.skipLoadingUserProfile();
	}

	readonly createOrder = createEffect(() =>
		this.#actions.pipe(
			ofType(orderActions.createOrderRequest),
			switchMap((payload) => {
				return this.#orderService.createOrder(payload).pipe(
					switchMap((order) => {
						this.#router.navigate([`checkout`, `payment`, order._id]);
						return of(orderActions.createOrderRequestSuccess({ order: order }));
					}),
					tap(() => {
						return this.#snackBar.open(
							`Order created successfully`,
							undefined,
							{
								duration: 5000,
								verticalPosition: 'bottom',
								horizontalPosition: 'end',
								panelClass: ['snackbar-success'],
							},
						);
					}),
					catchError((err) => {
						this.#snackBar.open(`Order creation failed`, undefined, {
							duration: 10000,
							verticalPosition: 'bottom',
							horizontalPosition: 'end',
							panelClass: ['snackbar-error'],
						});
						return of(
							orderActions.createOrderRequestFailure({ err: err.error }),
						);
					}),
				);
			}),
		),
	);

	readonly getOrderById = createEffect(() =>
		this.#actions.pipe(
			ofType(orderActions.getOrderById),
			switchMap((payload) => {
				return this.#orderService.getOrderById(payload.orderId).pipe(
					switchMap((order) => {
						return of(orderActions.getOrderByIdSuccess({ order: order }));
					}),
					catchError((err) =>
						of(orderActions.getOrderByIdFailure({ err: err.error })),
					),
				);
			}),
		),
	);

	readonly getOrderHistory = createEffect(() =>
		this.#actions.pipe(
			ofType(orderActions.getOrderHistoryRequest, AuthActions.loginSuccess),
			switchMap(() => {
				return this.#orderService.getOrderHistory().pipe(
					switchMap(function (orders) {
						return of(
							orderActions.getOrderHistoryRequestSuccess({ orders: orders }),
						);
					}),
					catchError((err) =>
						of(orderActions.getOrderHistoryRequestFailure({ err: err.error })),
					),
				);
			}),
		),
	);
}
