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
import { selectAddresses } from '../../../user/data-access/store/user.selectors';
import { Addresses } from '../../../auth/models/addresses.model';
import { selectOrder } from '../../../orders/data-access/store/order.selectors';
import { OrderRes } from '../../../orders/models/order-res.model';
import { orderActions } from '../../../orders/data-access/store/order.actions';
import { selectCart } from '../../../cart/data-access/store/cart/cart.selectors';
import { Cart } from '../../../cart/models/cart.model';

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

	readonly order = this.#store.selectSignal<OrderRes | undefined>(selectOrder);

	readonly cart = this.#store.selectSignal<Cart | undefined>(selectCart);

	readonly form = this.#fb.group({
		firstName: [
			null,
			[Validators.required, Validators.pattern(/^\p{Lu}[\p{L}'-]{1,20}$/u)],
		],
		lastName: [
			null,
			[Validators.required, Validators.pattern(/^\p{Lu}[\p{L}'-]{1,20}$/u)],
		],
		street: [
			null,
			[
				Validators.required,
				Validators.pattern(/^\p{Lu}[\p{L}0-9\s.'-]{2,100}$/u),
			],
		],
		city: [
			null,
			[Validators.required, Validators.pattern(/^\p{Lu}[\p{L}\s-]{1,49}$/u)],
		],
		zipCode: [
			null,
			[Validators.required, Validators.pattern(/^[\p{L}0-9\s-]{3,10}$/u)],
		],
		number: [
			null,
			[
				Validators.required,
				Validators.pattern(/^\d+[A-Za-z]?([\/-]\d+[A-Za-z]?)?$/),
			],
		],
		phoneNumber: [
			null,
			[Validators.required, Validators.pattern(/^\+?[0-9\s\-()]{7,20}$/)],
		],
	});

	createOrder(existingAddress?: Addresses) {
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
