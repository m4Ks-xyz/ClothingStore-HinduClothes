import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
	signal,
} from '@angular/core';
import { AddressCardComponent } from '../../../checkout/components/address-card/address-card.component';
import { FILTER_STEPS } from '../../constants/order-status-steps.constant';
import { OrderTrackerComponent } from '../../../shared/components/progres-track/order-tracker.component';
import { Store } from '@ngrx/store';
import { selectOrder } from '../../data-access/store/order.selectors';
import { OrderRes } from '../../models/order-res.model';
import { orderActions } from '../../data-access/store/order.actions';
import { OrderProductDetailsComponent } from '../order-product-details/order-product-details.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-order-details',
	imports: [
		AddressCardComponent,
		OrderTrackerComponent,
		OrderProductDetailsComponent,
		MatButton,
		RouterLink,
	],
	templateUrl: './order-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderDetailsComponent {
	readonly #store = inject(Store);

	// query parrams
	readonly id = input.required<string>();

	readonly order = this.#store.selectSignal<OrderRes | undefined>(selectOrder);

	readonly steps = signal(FILTER_STEPS);

	constructor() {
		effect(() => {
			this.#store.dispatch(orderActions.getOrderById({ orderId: this.id() }));
		});
	}
}
