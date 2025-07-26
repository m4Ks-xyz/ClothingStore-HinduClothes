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
import {
	selectOrder,
	selectOrderLoading,
} from '../../data-access/store/order.selectors';
import { OrderRes } from '../../models/order-res.model';
import { orderActions } from '../../data-access/store/order.actions';
import { OrderProductDetailsComponent } from '../order-product-details/order-product-details.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { OrderSummaryComponent } from '../../../cart/components/order-summary/order-summary.component';
import { LoadingCirleComponent } from '../../../shared/components/loading-cirle/loading-cirle.component';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-order-details',
	imports: [
		AddressCardComponent,
		OrderTrackerComponent,
		OrderProductDetailsComponent,
		MatButton,
		RouterLink,
		OrderSummaryComponent,
		LoadingCirleComponent,
		DatePipe,
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

	readonly orderLoading = this.#store.selectSignal<boolean>(selectOrderLoading);

	constructor() {
		effect(() => {
			this.#store.dispatch(orderActions.getOrderById({ orderId: this.id() }));
		});
	}
}
