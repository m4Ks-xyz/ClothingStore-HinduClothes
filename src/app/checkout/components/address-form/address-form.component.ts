import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddressListComponent } from '../address-list/address-list.component';
import { Store } from '@ngrx/store';
import { orderActions } from '../../../orders/data-access/store/order.actions';
import { selectAddresses } from '../../../user/store/user.selectors';
import { Addresses } from '../../../auth/models/addresses.model';

@Component({
	selector: 'app-address-form',
	imports: [
		MatButton,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		AddressListComponent,
	],
	templateUrl: './address-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
	readonly #fb = inject(FormBuilder);
	readonly #store = inject(Store);

	readonly addresses = this.#store.selectSignal<Addresses[] | undefined>(
		selectAddresses,
	);

	readonly form = this.#fb.group({
		firstName: [null, Validators.required],
		lastName: [null, Validators.required],
		street: [null, Validators.required],
		city: [null, Validators.required],
		zipCode: [null, Validators.required],
		number: [null, Validators.required],
		phoneNumber: [null, Validators.required],
	});

	addAddress() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			console.log(this.form.getRawValue());
			this.#store.dispatch(
				orderActions.createOrderRequest(this.form.getRawValue()),
			);
		}
	}
}
