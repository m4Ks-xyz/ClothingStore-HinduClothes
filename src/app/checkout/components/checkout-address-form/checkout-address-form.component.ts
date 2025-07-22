import {
	ChangeDetectionStrategy,
	Component,
	inject,
	output,
} from '@angular/core';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Address } from '../../models/address.model';

@Component({
	selector: 'app-checkout-address-form',
	imports: [
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
	],
	templateUrl: './checkout-address-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
	readonly #fb = inject(FormBuilder);

	readonly address = output<Address>();

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

	createOrder() {
		this.form.markAllAsDirty();
		if (this.form.valid) {
			this.address.emit(this.form.getRawValue());
		}
	}
}
