import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderRes } from '../../models/order-res.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
	selector: 'app-order-card',
	imports: [RouterLink, DatePipe, CurrencyPipe],
	templateUrl: './order-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCardComponent {
	readonly order = input.required<OrderRes>();
}
