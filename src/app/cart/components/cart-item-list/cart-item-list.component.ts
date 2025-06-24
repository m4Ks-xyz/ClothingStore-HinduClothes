import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { MatDivider } from '@angular/material/divider';
import { CartItem } from '../../models/cart-item.model';

@Component({
	selector: 'app-cart-item-list',
	imports: [CartItemComponent, MatDivider],
	templateUrl: './cart-item-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent {
	showButtons = input.required<boolean>();
	cartProducts = input.required<CartItem[] | undefined>();
}
