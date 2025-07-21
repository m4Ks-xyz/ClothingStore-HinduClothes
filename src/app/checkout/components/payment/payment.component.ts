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
import { selectOrder } from '../../../orders/data-access/store/order.selectors';
import { orderActions } from '../../../orders/data-access/store/order.actions';
import { MatDivider } from '@angular/material/divider';
import { ProductItemComponent } from '../../../cart/components/product-item/product-item.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { OrderRes } from '../../../orders/models/order-res.model';

@Component({
	selector: 'app-payment',
	imports: [
		AddressCardComponent,
		OrderSummaryComponent,
		MatDivider,
		ProductItemComponent,
		RouterLink,
		MatButtonModule,
	],
	templateUrl: './payment.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentComponent {
	readonly #store = inject(Store);

	//query params
	readonly id = input.required<string>();

	readonly order = this.#store.selectSignal<OrderRes | undefined>(selectOrder);

	constructor() {
		effect(() => {
			return this.#store.dispatch(
				orderActions.getOrderById({ orderId: this.id() }),
			);
		});
	}

	payOrder() {
		console.log(this.order()?._id);
		this.#store.dispatch(orderActions.payOrder({ id: this.order()!._id }));
	}
}
