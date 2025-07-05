import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { Addresses } from '../../../auth/models/addresses.model';

@Component({
	selector: 'app-address-list',
	imports: [AddressCardComponent, RouterLink, MatButtonModule, MatDivider],
	templateUrl: './address-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressListComponent {
	addresses = input.required<Addresses[] | undefined>();

	createOrder() {
		console.log('Order created');
	}
}
