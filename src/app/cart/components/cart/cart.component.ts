import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-cart',
	imports: [CartItemComponent, MatDivider, MatButton, RouterLink],
	templateUrl: './cart.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CartComponent {
	readonly cart = [1, 2, 3];
}
