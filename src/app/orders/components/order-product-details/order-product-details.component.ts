import {
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	inject,
	input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderItems } from '../../models/order-items.model';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { OrderStatus } from '../../types/order-status.type';
import { RateProductDialogService } from '../../dialogs/rate-product-dialog.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { productsActions } from '../../../products/data-access/store/products/products.actions';
import { selectUserRatings } from '../../../user/data-access/store/user.selectors';
import { selectSelectedProductsRatings } from '../../../products/data-access/store/products/products.selectors';
import { Rating } from '../../../auth/models/ratings.model';

@Component({
	selector: 'app-order-product-details',
	imports: [RouterLink, CurrencyPipe, MatButton],
	templateUrl: './order-product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderProductDetailsComponent {
	readonly #store = inject(Store);
	readonly #rateProductDialogService = inject(RateProductDialogService);
	readonly #destroyRef = inject(DestroyRef);

	readonly item = input.required<OrderItems>();
	readonly status = input.required<OrderStatus | undefined>();

	readonly userRatings = this.#store.selectSignal<string[] | undefined>(
		selectUserRatings,
	);

	readonly productRatings = this.#store.selectSignal<Rating[] | undefined>(
		selectSelectedProductsRatings,
	);

	// TODO not really working, needed live update and use productRatings store slector
	alreadyCommented = computed(() => {
		const productRatings = this.item()?.product?.ratings ?? [];
		const userRatings = this.userRatings() ?? [];
		return productRatings.some((rating) => userRatings.includes(rating));
	});

	async openRateDialogComponent() {
		const dialogRef =
			await this.#rateProductDialogService.openRateProductDialog();

		dialogRef
			.afterClosed()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe((data) => {
				if (data) {
					this.#store.dispatch(
						productsActions.addProductReview({
							product: {
								productId: this.item().product._id,
								review: data.message,
								rating: data.rating,
							},
						}),
					);
				}
			});
	}
}
