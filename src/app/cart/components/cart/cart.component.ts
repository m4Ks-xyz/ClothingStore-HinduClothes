import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { last } from 'rxjs';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	imports: [CartItemComponent, MatDivider, MatButton],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
	readonly router = inject(Router);

	cart = [1, 2, 3];
	protected readonly last = last;
	protected readonly Router = Router;
}
