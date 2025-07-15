import {
	ChangeDetectionStrategy,
	Component,
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
							},
						}),
					);

					// 	TODO dispatch action na rating gdzie przekazuje data.rating
				}
			});
	}
}
