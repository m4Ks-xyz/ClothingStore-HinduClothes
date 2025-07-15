import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
} from '@angular/core';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { productsActions } from '../../data-access/store/products/products.actions';
import {
	selectProducts,
	selectSelectedProductById,
	selectSelectedProductsReviews,
} from '../../data-access/store/products/products.selectors';
import { ProductModel, ProductModelRes } from '../../models/product.model';
import { cartActions } from '../../../cart/data-access/store/cart/cart.actions';
import { CurrencyPipe } from '@angular/common';
import { ProductReviewCardComponent } from '../product-review-card/product-review-card.component';
import { Review } from '../../../auth/models/review.model';

@Component({
	selector: 'app-product-details',
	imports: [
		MatRadioModule,
		FormsModule,
		MatButtonModule,
		ProductRatingComponent,
		ProductCardComponent,
		ReactiveFormsModule,
		RouterLink,
		CurrencyPipe,
		ProductReviewCardComponent,
	],
	templateUrl: './product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductDetailsComponent {
	readonly #router = inject(Router);
	readonly #fb = inject(FormBuilder);
	readonly #store = inject(Store);

	readonly product = this.#store.selectSignal<ProductModelRes | undefined>(
		selectSelectedProductById,
	);

	readonly relatedProducts =
		this.#store.selectSignal<ProductModel[]>(selectProducts);

	readonly reviews = this.#store.selectSignal<Review[] | undefined>(
		selectSelectedProductsReviews,
	);

	/// query params
	readonly id = input.required<string>();

	constructor() {
		effect(() => {
			this.#store.dispatch(productsActions.findProductById({ _id: this.id() }));
		});
	}

	form = this.#fb.group({
		size: ['S', [Validators.required]],
		quantity: [1, [Validators.required]],
	});

	onSubmit(): void {
		if (this.form.valid) {
			this.#store.dispatch(
				cartActions.addItemToCart({
					data: {
						productId: this.id(),
						quantity: this.form.controls.quantity.value,
						size: this.form.controls.size.value,
					},
				}),
			);
			this.#router.navigate(['cart']);
		}
	}
}
