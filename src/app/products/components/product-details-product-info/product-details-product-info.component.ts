import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
} from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductModel } from '../../models/product.model';
import { cartActions } from '../../../cart/data-access/store/cart/cart.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserProfile } from '../../../user/data-access/store/user.selectors';

@Component({
	selector: 'app-product-details-product-info',
	imports: [
		CurrencyPipe,
		MatButton,
		MatRadioButton,
		MatRadioGroup,
		ReactiveFormsModule,
		NgOptimizedImage,
	],
	templateUrl: './product-details-product-info.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsProductInfoComponent {
	readonly #router = inject(Router);
	readonly #fb = inject(FormBuilder);
	readonly #store = inject(Store);

	readonly productDetails = input.required<ProductModel | undefined>();
	readonly user = this.#store.selectSignal(selectUserProfile);

	form = this.#fb.group({
		size: ['S', [Validators.required]],
		quantity: [1, [Validators.required]],
	});

	onSubmit(): void {
		if (this.form.valid) {
			this.#store.dispatch(
				cartActions.addItemToCart({
					data: {
						productId: this.productDetails()!._id,
						quantity: this.form.controls.quantity.value,
						size: this.form.controls.size.value,
					},
				}),
			);
			this.#router.navigate(['cart']);
		}
	}
}
