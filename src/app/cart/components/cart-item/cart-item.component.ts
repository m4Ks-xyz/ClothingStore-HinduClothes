import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-cart-item',
	imports: [MatMiniFabButton, MatIconModule, MatButton],
	templateUrl: './cart-item.component.html',
	styleUrl: './cart-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
	count = signal<number>(1);

	removeItem(): void {
		console.log('item removed');
	}
}
