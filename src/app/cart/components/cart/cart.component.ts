import {
	ChangeDetectionStrategy,
	Component,
	inject,
	Signal,
} from '@angular/core';
import { CartItemListComponent } from '../cart-item-list/cart-item-list.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import { selectCart } from '../../data-access/store/cart/cart.selectors';
import { Cart } from '../../models/cart.model';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-cart',
	imports: [
		CartItemListComponent,
		OrderSummaryComponent,
		MatButton,
		RouterLink,
	],
	templateUrl: './cart.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CartComponent {
	readonly #store = inject(Store);

	readonly cart: Signal<Cart | undefined> =
		this.#store.selectSignal(selectCart);
}
