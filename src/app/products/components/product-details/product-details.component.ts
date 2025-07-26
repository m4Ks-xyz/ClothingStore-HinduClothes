import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { productsActions } from '../../data-access/store/products/products.actions';
import {
	selectProducts,
	selectProductsLoading,
	selectSelectedProductById,
	selectSelectedProductsRatings,
	selectSelectedProductsReviews,
} from '../../data-access/store/products/products.selectors';
import { ProductModel, ProductModelRes } from '../../models/product.model';
import { Review } from '../../../auth/models/review.model';
import { Rating } from '../../../auth/models/ratings.model';
import { ProductDetailsProductInfoComponent } from '../product-details-product-info/product-details-product-info.component';
import { ProductDetailsPathComponent } from '../product-details-path/product-details-path.component';
import { ProductDetailsReviewsComponent } from '../product-details-reviews/product-details-reviews.component';
import { ProductDetailsRelatedProductsComponent } from '../product-details-related-products/product-details-related-products.component';
import { EmptyStateMessageComponent } from '../../../shared/components/empty-state-message/empty-state-message.component';
import { LoadingCirleComponent } from '../../../shared/components/loading-cirle/loading-cirle.component';

@Component({
	selector: 'app-product-details',
	imports: [
		MatRadioModule,
		FormsModule,
		MatButtonModule,
		ReactiveFormsModule,
		ProductDetailsProductInfoComponent,
		ProductDetailsPathComponent,
		ProductDetailsReviewsComponent,
		ProductDetailsRelatedProductsComponent,
		EmptyStateMessageComponent,
		LoadingCirleComponent,
	],
	templateUrl: './product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductDetailsComponent {
	readonly #store = inject(Store);

	readonly product = this.#store.selectSignal<ProductModelRes | undefined>(
		selectSelectedProductById,
	);

	readonly relatedProducts =
		this.#store.selectSignal<ProductModel[]>(selectProducts);

	readonly reviews = this.#store.selectSignal<Review[] | undefined>(
		selectSelectedProductsReviews,
	);

	readonly ratings = this.#store.selectSignal<Rating[] | undefined>(
		selectSelectedProductsRatings,
	);

	readonly productLoading = this.#store.selectSignal<boolean>(
		selectProductsLoading,
	);

	/// query params
	readonly id = input.required<string>();

	constructor() {
		effect(() => {
			this.#store.dispatch(productsActions.findProductById({ _id: this.id() }));
		});
	}
}
