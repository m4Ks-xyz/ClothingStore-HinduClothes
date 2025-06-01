import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
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
	styleUrl: './address-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
	readonly #fb = inject(FormBuilder);

	readonly addresses = signal([1, 2, 3]);

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
			this.form.reset();
			console.log('Address added:', this.form.value);
		}
	}
}
