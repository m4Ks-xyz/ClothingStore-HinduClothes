import {
	ChangeDetectionStrategy,
	Component,
	inject,
	Signal,
} from '@angular/core';
import { CartItemListComponent } from '../cart-item-list/cart-item-list.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import {
	selectCart,
	selectCartLoading,
} from '../../data-access/store/cart/cart.selectors';
import { Cart } from '../../models/cart.model';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EmptyStateMessageComponent } from '../../../shared/components/empty-state-message/empty-state-message.component';
import { LoadingCirleComponent } from '../../../shared/components/loading-cirle/loading-cirle.component';

@Component({
	selector: 'app-cart',
	imports: [
		CartItemListComponent,
		OrderSummaryComponent,
		MatButton,
		RouterLink,
		EmptyStateMessageComponent,
		LoadingCirleComponent,
	],
	templateUrl: './cart.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CartComponent {
	readonly #store = inject(Store);

	readonly cartLoading = this.#store.selectSignal<boolean>(selectCartLoading);

	readonly cart: Signal<Cart | undefined> =
		this.#store.selectSignal(selectCart);
}
