import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
} from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { CartItemListComponent } from '../../../cart/components/cart-item-list/cart-item-list.component';
import { OrderSummaryComponent } from '../../../cart/components/order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import { selectCart } from '../../../cart/data-access/store/cart/cart.selectors';
import { selectOrderShippingAddress } from '../../../orders/data-access/store/order.selectors';
import { Address } from '../../models/address.model';
import { Cart } from '../../../cart/models/cart.model';
import { orderActions } from '../../../orders/data-access/store/order.actions';

@Component({
	selector: 'app-payment',
	imports: [AddressCardComponent, CartItemListComponent, OrderSummaryComponent],
	templateUrl: './payment.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentComponent {
	readonly #store = inject(Store);

	//query params
	readonly id = input.required<string>();

	readonly products = this.#store.selectSignal<Cart | undefined>(selectCart);
	readonly addresses = this.#store.selectSignal<Address | undefined>(
		selectOrderShippingAddress,
	);

	constructor() {
		effect(() => {
			return this.#store.dispatch(
				orderActions.getOrderById({ orderId: this.id() }),
			);
		});
	}
}
