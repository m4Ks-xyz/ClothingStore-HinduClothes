import {
	ChangeDetectionStrategy,
	Component,
	input,
	signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { menKurta } from '../../constants/Men/men-kurta.constant';
import { BaseProduct } from '../../models/base-product.model';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
import { ProductReviewCardComponent } from '../product-review-card/product-review-card.component';

@Component({
	selector: 'app-product-details',
	imports: [
		MatRadioModule,
		FormsModule,
		MatButtonModule,
		ProductReviewCardComponent,
		ProductRatingComponent,
		ProductCardComponent,
	],
	templateUrl: './product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
	id = input<string>();
	selectedSize = '';
	reviews = [1, 1, 1];

	testProduct = signal<BaseProduct[]>(menKurta);
}
