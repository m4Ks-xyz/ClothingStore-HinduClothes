import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { CartItemListComponent } from '../../../cart/components/cart-item-list/cart-item-list.component';
import { OrderSummaryComponent } from '../../../cart/components/order-summary/order-summary.component';

@Component({
	selector: 'app-payment',
	imports: [AddressCardComponent, CartItemListComponent, OrderSummaryComponent],
	templateUrl: './payment.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaymentComponent {
	readonly products = signal([1, 2, 3]);
}
