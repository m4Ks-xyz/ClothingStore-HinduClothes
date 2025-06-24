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
import { ProductReviewCardComponent } from '../product-review-card/product-review-card.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { productsActions } from '../../data-access/store/products/products.actions';
import {
	selectedProduct,
	selectProducts,
} from '../../data-access/store/products/products.selectors';
import { ProductModel } from '../../models/product.model';

@Component({
	selector: 'app-product-details',
	imports: [
		MatRadioModule,
		FormsModule,
		MatButtonModule,
		ProductReviewCardComponent,
		ProductRatingComponent,
		ProductCardComponent,
		ReactiveFormsModule,
	],
	templateUrl: './product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductDetailsComponent {
	readonly #router = inject(Router);
	readonly #fb = inject(FormBuilder);
	readonly #store = inject(Store);

	readonly product = this.#store.selectSignal<ProductModel | undefined>(
		selectedProduct,
	);
	readonly relatedProducts =
		this.#store.selectSignal<ProductModel[]>(selectProducts);

	/// query params
	readonly id = input.required<string>();

	constructor() {
		effect(() => {
			this.#store.dispatch(productsActions.findProductById({ _id: this.id() }));
		});

		effect(() => {
			this.#store.dispatch(
				productsActions.findProductByCategory({
					params: {
						category: this.product()?.category?.name,
					},
				}),
			);
		});
	}

	form = this.#fb.group({
		size: ['S', [Validators.required]],
		quantity: [1, [Validators.required]],
	});

	onSubmit(): void {
		if (this.form.valid) {
			this.#router.navigate(['cart']);
		}
	}
}
