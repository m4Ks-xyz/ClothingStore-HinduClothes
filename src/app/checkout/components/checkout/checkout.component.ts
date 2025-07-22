import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddressListComponent } from '../address-list/address-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Addresses } from '../../../auth/models/addresses.model';
import { selectAddresses } from '../../../user/data-access/store/user.selectors';
import { OrderRes } from '../../../orders/models/order-res.model';
import { selectOrder } from '../../../orders/data-access/store/order.selectors';
import { Cart } from '../../../cart/models/cart.model';
import { selectCart } from '../../../cart/data-access/store/cart/cart.selectors';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddressFormComponent } from '../checkout-address-form/checkout-address-form.component';
import { orderActions } from '../../../orders/data-access/store/order.actions';
import { Address } from '../../models/address.model';
import { EmptyStateMessageComponent } from '../../../shared/components/empty-state-message/empty-state-message.component';

@Component({
	selector: 'app-checkout',
	imports: [
		AddressListComponent,
		FormsModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		AddressFormComponent,
		EmptyStateMessageComponent,
	],
	templateUrl: './checkout.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckoutComponent {
	readonly #store = inject(Store);

	readonly addresses = this.#store.selectSignal<Addresses[] | undefined>(
		selectAddresses,
	);

	readonly order = this.#store.selectSignal<OrderRes | undefined>(selectOrder);

	readonly cart = this.#store.selectSignal<Cart | undefined>(selectCart);

	createOrder(address: Address) {
		this.#store.dispatch(orderActions.createOrderRequest({ address: address }));
	}
}
