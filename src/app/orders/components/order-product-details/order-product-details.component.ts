import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderItems } from '../../models/order-items.model';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-order-product-details',
	imports: [RouterLink, CurrencyPipe],
	templateUrl: './order-product-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderProductDetailsComponent {
	readonly order = input.required<OrderItems>();
}
