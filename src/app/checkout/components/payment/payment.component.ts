import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
} from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { OrderSummaryComponent } from '../../../cart/components/order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import {
	selectOrder,
	selectOrderLoading,
} from '../../../orders/data-access/store/order.selectors';
import { orderActions } from '../../../orders/data-access/store/order.actions';
import { MatDivider } from '@angular/material/divider';
import { ProductItemComponent } from '../../../cart/components/product-item/product-item.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { OrderRes } from '../../../orders/models/order-res.model';
import { EmptyStateMessageComponent } from '../../../shared/components/empty-state-message/empty-state-message.component';
import { LoadingCirleComponent } from '../../../shared/components/loading-cirle/loading-cirle.component';

@Component({
	selector: 'app-payment',
	imports: [
		AddressCardComponent,
		OrderSummaryComponent,
		MatDivider,
		ProductItemComponent,
		RouterLink,
		MatButtonModule,
		EmptyStateMessageComponent,
		LoadingCirleComponent,
	],
	templateUrl: './payment.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentComponent {
	readonly #store = inject(Store);

	//query params
	readonly id = input.required<string>();

	readonly order = this.#store.selectSignal<OrderRes | undefined>(selectOrder);
	readonly orderLoading = this.#store.selectSignal<boolean>(selectOrderLoading);

	test = true;

	constructor() {
		effect(() => {
			return this.#store.dispatch(
				orderActions.getOrderById({ orderId: this.id() }),
			);
		});
	}

	payOrder() {
		this.#store.dispatch(orderActions.payOrder({ id: this.order()!._id }));
	}
}
