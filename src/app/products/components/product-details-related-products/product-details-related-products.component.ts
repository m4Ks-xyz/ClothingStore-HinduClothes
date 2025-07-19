import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductModel } from '../../models/product.model';

@Component({
	selector: 'app-product-details-related-products',
	imports: [ProductCardComponent],
	templateUrl: './product-details-related-products.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsRelatedProductsComponent {
	readonly relatedProducts = input.required<ProductModel[] | undefined>();
}
