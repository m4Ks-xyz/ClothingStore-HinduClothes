import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderItems } from '../../models/order-items.model';

@Component({
	selector: 'app-order-product-details',
	imports: [RouterLink],
	templateUrl: './order-product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderProductDetailsComponent {
	readonly order = input.required<OrderItems>();
}
