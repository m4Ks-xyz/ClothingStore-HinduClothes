import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FILTER_OPTIONS } from '../../constants/filter-options.constant';
import { MatCheckbox } from '@angular/material/checkbox';
import { OrderCardComponent } from '../order-card/order-card.component';

@Component({
	selector: 'app-orders',
	imports: [MatCheckbox, OrderCardComponent],
	templateUrl: './orders.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
	readonly filterOptions: { value: string; label: string }[] = FILTER_OPTIONS;
	readonly orders = signal([
		[1, 2, 3],
		[1, 2, 3],
	]);
}
