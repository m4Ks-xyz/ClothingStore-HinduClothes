import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { Addresses } from '../../../auth/models/addresses.model';

@Component({
	selector: 'app-address-list',
	imports: [AddressCardComponent, MatButtonModule, MatDivider],
	templateUrl: './address-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressListComponent {
	readonly addresses = input.required<Addresses[] | undefined>();

	readonly orderAddress = output<Addresses>();
}
