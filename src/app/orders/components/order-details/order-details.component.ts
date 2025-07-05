import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
import { AddressCardComponent } from '../../../checkout/components/address-card/address-card.component';
import { OrderCardComponent } from '../order-card/order-card.component';
import { FILTER_STEPS } from '../../constants/order-status-steps.constant';
import { OrderTrackerComponent } from '../../../shared/components/progres-track/order-tracker.component';
import { Store } from '@ngrx/store';
import { selectOrdersHistory } from '../../data-access/store/order.selectors';

@Component({
	selector: 'app-order-details',
	imports: [AddressCardComponent, OrderCardComponent, OrderTrackerComponent],
	templateUrl: './order-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderDetailsComponent {
	readonly #store = inject(Store);

	readonly orders = this.#store.selectSignal(selectOrdersHistory);

	readonly steps = signal(FILTER_STEPS);
}
