import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FILTER_OPTIONS } from '../../constants/filter-options.constant';
import { MatCheckbox } from '@angular/material/checkbox';
import { OrderCardComponent } from '../order-card/order-card.component';
import { Store } from '@ngrx/store';
import { selectOrdersHistory } from '../../data-access/store/order.selectors';
import { OrderRes } from '../../models/order-res.model';

@Component({
	selector: 'app-orders',
	imports: [MatCheckbox, OrderCardComponent],
	templateUrl: './orders.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrdersComponent {
	readonly #store = inject(Store);

	readonly orders = this.#store.selectSignal<OrderRes[] | undefined>(
		selectOrdersHistory,
	);

	readonly filterOptions: { value: string; label: string }[] = FILTER_OPTIONS;
}
