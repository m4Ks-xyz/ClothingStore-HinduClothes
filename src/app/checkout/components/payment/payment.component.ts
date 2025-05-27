import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AddressCardComponent } from '../../../shared/components/address-card/address-card.component';
import { CartItemComponent } from '../../../cart/components/cart-item/cart-item.component';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';

@Component({
	selector: 'app-payment',
	imports: [AddressCardComponent, CartItemComponent, MatDivider, MatButton],
	templateUrl: './payment.component.html',
	styleUrl: './payment.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
	products = signal([1, 2, 3]);
}
