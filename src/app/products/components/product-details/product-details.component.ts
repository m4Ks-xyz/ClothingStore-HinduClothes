import {
	ChangeDetectionStrategy,
	Component,
	input,
	signal,
} from '@angular/core';

@Component({
	selector: 'app-product-details',
	imports: [],
	templateUrl: './product-details.component.html',
	styleUrl: './product-details.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
	id = input<string>();
}
