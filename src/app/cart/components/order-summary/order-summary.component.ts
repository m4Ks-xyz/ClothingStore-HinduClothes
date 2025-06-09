import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-order-summary',
	imports: [MatButton, MatDivider, RouterLink],
	templateUrl: './order-summary.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
	cartProducts = input.required<any[]>();

	readonly buttonMode = input.required<'checkout' | 'payment'>();
}
