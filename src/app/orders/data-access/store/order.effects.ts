import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { orderActions } from './order.actions';
import { catchError, of, switchMap } from 'rxjs';
import { OrderDataAccessService } from '../service/order-data-access.service';

@Injectable()
export class OrderEffects {
	readonly #actions = inject(Actions);
	readonly #orderService = inject(OrderDataAccessService);

	readonly createOrder = createEffect(() =>
		this.#actions.pipe(
			ofType(orderActions.createOrderRequest),
			switchMap((payload) => {
				return this.#orderService.createOrder(payload).pipe(
					switchMap((order) =>
						of(orderActions.createOrderRequestSuccess({ order: order })),
					),
					catchError((err) =>
						of(orderActions.createOrderRequestFailure({ err: err.error })),
					),
				);
			}),
		),
	);

	readonly getOrderById = createEffect(() =>
		this.#actions.pipe(
			ofType(orderActions.getOrderById),
			switchMap((payload) => {
				return this.#orderService.getOrderById(payload.orderId).pipe(
					switchMap((order) =>
						of(orderActions.getOrderByIdSuccess({ order: order })),
					),
					catchError((err) =>
						of(orderActions.getOrderByIdFailure({ err: err.error })),
					),
				);
			}),
		),
	);

	readonly getOrderHistory = createEffect(() =>
		this.#actions.pipe(
			ofType(orderActions.getOrderHistoryRequest),
			switchMap(() => {
				return this.#orderService.getOrderHistory().pipe(
					switchMap((orders) =>
						of(orderActions.getOrderHistoryRequestSuccess({ orders: orders })),
					),
					catchError((err) =>
						of(orderActions.getOrderHistoryRequestFailure({ err: err.error })),
					),
				);
			}),
		),
	);
}
