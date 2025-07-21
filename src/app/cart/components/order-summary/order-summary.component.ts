import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-order-summary',
	imports: [MatDivider, CurrencyPipe],
	templateUrl: './order-summary.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
	readonly totalPrice = input<number | undefined>();
	readonly discount = input<number | undefined>();
	readonly totalDiscountedPrice = input<number | undefined>();
}
