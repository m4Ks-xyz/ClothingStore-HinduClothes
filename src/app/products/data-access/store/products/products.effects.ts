import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productsActions } from './products.actions';
import { catchError, exhaustMap, of, switchMap } from 'rxjs';
import { ProductApiService } from '../../services/product-api.service';

@Injectable()
export class ProductsEffects {
	readonly #actions$ = inject(Actions);
	readonly #productsService = inject(ProductApiService);

	// ngrxOnInitEffects(): Action {
	// 	if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
	// 		return productsActions.findProductByCategory({
	// 			params: { levelThree: `Koszulki` },
	// 		});
	// 	}
	// 	return UserActions.skipLoadingUserProfile();
	// }

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
					switchMap(function (product) {
						return of(
							productsActions.findProductByIdSuccess({ product: product }),
						);
					}),
					catchError((err) =>
						of(productsActions.findProductByIdFailure({ error: err })),
					),
				);
			}),
		),
	);
}
