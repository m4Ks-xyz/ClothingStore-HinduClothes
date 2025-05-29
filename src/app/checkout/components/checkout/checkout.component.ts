import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
	selector: 'app-checkout',
	imports: [AddressFormComponent],
	templateUrl: './checkout.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {}
