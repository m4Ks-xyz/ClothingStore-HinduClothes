import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartItem } from '../../models/cart-item.model';
import { Store } from '@ngrx/store';
import { cartActions } from '../../data-access/store/cart/cart.actions';
import { ProductItemComponent } from '../product-item/product-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-cart-item',
	imports: [MatIconModule, ProductItemComponent, MatButtonModule],
	templateUrl: './cart-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
	readonly #store = inject(Store);

	readonly showButtons = input.required<boolean>();
	readonly cartItem = input.required<CartItem>();

	readonly count = computed(() => {
		return this.cartItem().quantity;
	});

	increment() {
		this.#store.dispatch(
			cartActions.updateCartItem({
				id: this.cartItem()._id,
				quantity: this.count() + 1,
			}),
		);
	}

	decrement() {
		this.#store.dispatch(
			cartActions.updateCartItem({
				id: this.cartItem()._id,
				quantity: this.count() - 1,
			}),
		);
	}

	removeItem(): void {
		this.#store.dispatch(
			cartActions.removeCartItem({ id: this.cartItem()._id }),
		);
	}
}
