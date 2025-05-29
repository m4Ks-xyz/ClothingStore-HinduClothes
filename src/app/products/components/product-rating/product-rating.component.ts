import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RATING_CATEGORIES } from '../../constants/product-rating-categories-constant';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
	selector: 'app-product-rating',
	imports: [MatProgressBarModule, StarRatingComponent],
	templateUrl: './product-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRatingComponent {
	readonly ratingCategories: { id: string; name: string }[] = RATING_CATEGORIES;
}
