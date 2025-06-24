import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { CartItemListComponent } from '../../../cart/components/cart-item-list/cart-item-list.component';
import { OrderSummaryComponent } from '../../../cart/components/order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import { selectCart } from '../../../cart/data-access/store/cart/cart.selectors';

@Component({
	selector: 'app-payment',
	imports: [AddressCardComponent, CartItemListComponent, OrderSummaryComponent],
	templateUrl: './payment.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentComponent {
	readonly #store = inject(Store);
	readonly products = this.#store.selectSignal(selectCart);
}
