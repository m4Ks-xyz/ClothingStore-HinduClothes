import {
	ChangeDetectionStrategy,
	Component,
	inject,
	output,
} from '@angular/core';
import {
	AbstractControl,
	ControlContainer,
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthFormDialogActionsComponent } from '../auth-form-dialog-actions/auth-form-dialog-actions.component';
import { MatInput } from '@angular/material/input';
import { AuthFormDialogStatusComponent } from '../auth-form-dialog-status/auth-form-dialog-status.component';
import { AuthFormDialogResults } from '../../../types/auth-form-dialog.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-auth-sign-up',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		AuthFormDialogActionsComponent,
		MatInput,
		AuthFormDialogStatusComponent,
	],
	templateUrl: './auth-sign-up.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{ provide: ControlContainer, useExisting: FormGroupDirective },
	],
})
export class AuthSignUpComponent {
	readonly #fb = inject(FormBuilder);
	readonly dialogRef = inject(MatDialogRef<AuthFormDialogResults>);

	readonly toggleAccountStatus = output<void>();

	form = this.#fb.group(
		{
			email: [null, [Validators.email, Validators.required]],
			password: [
				null,
				[
					Validators.required,
					Validators.pattern(
						/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
					),
				],
			],
			confirmPassword: [null, Validators.required],
			firstName: [
				'',
				[Validators.required, Validators.pattern(/^\p{Lu}[\p{L}'-]{1,20}$/u)],
			],
			lastName: [
				'',
				[Validators.required, Validators.pattern(/^\p{Lu}[\p{L}'-]{1,20}$/u)],
			],
		},
		{
			validators: this.confirmPasswordValidator('password', 'confirmPassword'),
		},
	);

	confirmPasswordValidator(
		controlOneName: string,
		controlTwoName: string,
	): ValidatorFn {
		return (group: AbstractControl) => {
			const controlOne = group.get(controlOneName);
			const controlTwo = group.get(controlTwoName);

			if (!controlOne || !controlTwo) return null;

			if (controlOne.value !== controlTwo.value) {
				controlTwo.setErrors({ match_error: true });
			} else {
				if (controlTwo.hasError(`match_error`)) {
					const errors = { ...controlTwo.errors };
					delete errors['match_error'];
					controlTwo.setErrors(Object.keys(errors).length ? errors : null);
				}
			}
			return null;
		};
	}

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			this.dialogRef.close({
				credentials: this.form.value,
				status: 'register',
			});
		}
	}
}
