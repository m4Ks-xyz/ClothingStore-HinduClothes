import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductModelPath } from '../../models/product.model';

@Component({
	selector: 'app-product-details-path',
	imports: [RouterLink],
	templateUrl: './product-details-path.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsPathComponent {
	readonly path = input.required<ProductModelPath | undefined>();
}
