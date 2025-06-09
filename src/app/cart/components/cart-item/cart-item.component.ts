import {
	ChangeDetectionStrategy,
	Component,
	input,
	signal,
} from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-cart-item',
	imports: [MatMiniFabButton, MatIconModule, MatButton],
	templateUrl: './cart-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
	readonly count = signal<number>(1);
	readonly showButtons = input.required<boolean>();

	removeItem(): void {
		console.log('Item removed');
	}
}
