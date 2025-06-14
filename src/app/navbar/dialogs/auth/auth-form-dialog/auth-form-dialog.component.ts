import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	signal,
} from '@angular/core';
import {
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-auth-form-dialog',
	imports: [
		MatDialogContent,
		MatDialogActions,
		MatDialogTitle,
		MatButtonModule,
		MatDialogClose,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
	],
	templateUrl: './auth-form-dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormDialogComponent {
	readonly #fb = inject(FormBuilder);
	readonly #dialogRef = inject(MatDialogRef<AuthFormDialogComponent>);
	readonly haveAccount = signal<boolean>(true);

	constructor() {
		effect(() => {
			if (this.haveAccount()) {
				this.form.get('firstName')?.clearValidators();
				this.form.get('lastName')?.clearValidators();
			} else {
				this.form
					.get('firstName')
					?.setValidators([Validators.required, Validators.minLength(3)]);
				this.form
					.get('lastName')
					?.setValidators([Validators.required, Validators.minLength(3)]);
			}
			this.form.get('firstName')?.updateValueAndValidity();
			this.form.get('lastName')?.updateValueAndValidity();
		});
	}

	form = this.#fb.group({
		eMail: ['', [Validators.email, Validators.required]],
		password: ['', [Validators.required, Validators.minLength(8)]],
		firstName: [''],
		lastName: [''],
	});

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			const formValue = this.form.value;

			console.log(formValue);
			this.#dialogRef.close({
				...formValue,
			});
		}
	}
}
