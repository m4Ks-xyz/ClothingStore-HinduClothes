import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { Cart } from '../../models/cart.model';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-order-summary',
	imports: [MatButton, MatDivider, RouterLink, CurrencyPipe],
	templateUrl: './order-summary.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
	readonly cart = input.required<Cart | undefined>();

	readonly buttonMode = input.required<'checkout' | 'payment'>();
}
