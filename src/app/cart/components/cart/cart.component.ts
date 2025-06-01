import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CartItemListComponent } from '../cart-item-list/cart-item-list.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';

@Component({
	selector: 'app-cart',
	imports: [CartItemListComponent, OrderSummaryComponent],
	templateUrl: './cart.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CartComponent {
	readonly cartProducts = signal([1, 2, 3]);
}
