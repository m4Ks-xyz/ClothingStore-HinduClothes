import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { productsActions } from './products.actions';
import { catchError, exhaustMap, of, switchMap, tap } from 'rxjs';
import { ProductApiService } from '../../services/product-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductsEffects implements OnInitEffects {
	readonly #actions$ = inject(Actions);
	readonly #productsService = inject(ProductApiService);
	readonly #snackBar = inject(MatSnackBar);

	ngrxOnInitEffects(): Action {
		return productsActions.getHomePageProducts();
	}

	readonly getProductByCategory = createEffect(() =>
		this.#actions$.pipe(
			ofType(productsActions.findProductByCategory),
			exhaustMap((action) =>
				this.#productsService.findProductsByCategory(action.params).pipe(
					switchMap((productsRes) =>
						of(
							productsActions.findProductByCategorySuccess({
								products: productsRes,
							}),
						),
					),
					catchError((err) =>
						of(productsActions.findProductByCategoryFailure({ error: err })),
					),
				),
			),
		),
	);

	readonly getProductById = createEffect(() =>
		this.#actions$.pipe(
			ofType(productsActions.findProductById),
			switchMap((action) => {
				return this.#productsService.findProductsById(action._id).pipe(
					switchMap(function (action) {
						return of(
							productsActions.findProductByIdSuccess({
								product: action,
							}),
						);
					}),
					catchError((err) =>
						of(productsActions.findProductByIdFailure({ error: err })),
					),
				);
			}),
		),
	);

	readonly getRelatedProducts = createEffect(() =>
		this.#actions$.pipe(
			ofType(productsActions.findProductByIdSuccess),
			switchMap((action) => {
				return of(
					productsActions.findProductByCategory({
						params: { levelThree: action.product.details.category?._id },
					}),
				);
			}),
			catchError((err) =>
				of(productsActions.findProductByCategoryFailure({ error: err.error })),
			),
		),
	);

	readonly addProductReview = createEffect(() =>
		this.#actions$.pipe(
			ofType(productsActions.addProductReview),
			switchMap((payload) => {
				return this.#productsService
					.addProductReview({
						productId: payload.product.productId,
						review: payload.product.review,
						rating: payload.product.rating,
					})
					.pipe(
						switchMap((payload) =>
							of(
								productsActions.addProductReviewSuccess({
									review: payload.review,
									rating: payload.rating,
								}),
							),
						),
						tap(() =>
							this.#snackBar.open(`Review added`, undefined, {
								duration: 5000,
								verticalPosition: 'bottom',
								horizontalPosition: 'end',
								panelClass: ['snackbar-success'],
							}),
						),
						catchError((err) => {
							this.#snackBar.open(err.error.error, undefined, {
								duration: 5000,
								verticalPosition: 'bottom',
								horizontalPosition: 'end',
								panelClass: ['snackbar-error'],
							});
							return of(
								productsActions.addProductReviewFailure({ error: err.error }),
							);
						}),
					);
			}),
		),
	);

	readonly getProductReviews = createEffect(() =>
		this.#actions$.pipe(
			ofType(productsActions.findProductByIdSuccess),
			switchMap((payload) => {
				return this.#productsService
					.getProductReviews(payload.product.details._id)
					.pipe(
						switchMap((payload) => {
							return of(
								productsActions.getProductReviewsSuccess({
									review: payload.review,
									rating: payload.rating,
								}),
							);
						}),
						catchError((err) =>
							of(
								productsActions.getProductReviewsFailure({ error: err.error }),
							),
						),
					);
			}),
		),
	);

	readonly getHomePageProducts = createEffect(() =>
		this.#actions$.pipe(
			ofType(productsActions.getHomePageProducts),
			switchMap(() => {
				return this.#productsService.getHomePageProducts().pipe(
					switchMap((payload) => {
						return of(
							productsActions.getHomePageProductsSuccess({
								products: payload.products,
							}),
						);
					}),
					catchError((err) =>
						of(
							productsActions.getHomePageProductsFailure({ error: err.error }),
						),
					),
				);
			}),
		),
	);
}
