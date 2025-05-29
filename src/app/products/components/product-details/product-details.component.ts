import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
	signal,
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
import { MEN_KURTA } from '../../constants/Men/men-kurta.constant';
import { BaseProduct } from '../../models/base-product.model';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
import { ProductReviewCardComponent } from '../product-review-card/product-review-card.component';
import { Router } from '@angular/router';

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
export class ProductDetailsComponent {
	readonly #router = inject(Router);
	readonly #fb = inject(FormBuilder);

	readonly id = input<string>();

	reviews = [1, 2, 3];

	testProduct = signal<BaseProduct[]>(MEN_KURTA);

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
