import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productsActions } from './products.actions';
import { catchError, exhaustMap, of, switchMap } from 'rxjs';
import { ProductApiService } from '../../services/product-api.service';

@Injectable()
export class ProductsEffects {
	readonly #actions$ = inject(Actions);
	readonly #productsService = inject(ProductApiService);

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
}
