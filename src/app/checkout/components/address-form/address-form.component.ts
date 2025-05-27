import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { AddressCardComponent } from '../../../shared/components/address-card/address-card.component';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-address-form',
	imports: [
		MatButton,
		MatDivider,
		AddressCardComponent,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
	],
	templateUrl: './address-form.component.html',
	styleUrl: './address-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
	readonly #fb = inject(FormBuilder);

	addresses = signal([1, 2, 3]);

	readonly form = this.#fb.group({
		firstName: [null, Validators.required],
		lastName: [null, Validators.required],
		street: [null, Validators.required],
		city: [null, Validators.required],
		zipCode: [null, Validators.required],
		number: [null, Validators.required],
		phoneNumber: [null, Validators.required],
	});

	createOrder() {
		console.log('Order created');
	}

	addAddress() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			console.log('Address added:', this.form.value);
		}
	}
}
