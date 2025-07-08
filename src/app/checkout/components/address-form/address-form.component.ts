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
import { selectAddresses } from '../../../user/store/user.selectors';
import { Addresses } from '../../../auth/models/addresses.model';
import { Router } from '@angular/router';
import { selectOrder } from '../../../orders/data-access/store/order.selectors';
import { OrderRes } from '../../../orders/models/order-res.model';
import { orderActions } from '../../../orders/data-access/store/order.actions';

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
	readonly #router = inject(Router);

	readonly addresses = this.#store.selectSignal<Addresses[] | undefined>(
		selectAddresses,
	);

	readonly order = this.#store.selectSignal<OrderRes | undefined>(selectOrder);

	readonly form = this.#fb.group({
		firstName: [null, Validators.required],
		lastName: [null, Validators.required],
		street: [null, Validators.required],
		city: [null, Validators.required],
		zipCode: [null, Validators.required],
		number: [null, Validators.required],
		phoneNumber: [null, Validators.required],
	});

	createOrder(existingAddress?: Addresses) {
		this.#router.navigate(['/checkout/payment', this.order()?._id]);
		if (existingAddress) {
			return this.#store.dispatch(
				orderActions.createOrderRequest(existingAddress),
			);
		}

		this.form.markAllAsTouched();

		if (this.form.valid) {
			this.#store.dispatch(
				orderActions.createOrderRequest(this.form.getRawValue()),
			);
		}
	}
}
