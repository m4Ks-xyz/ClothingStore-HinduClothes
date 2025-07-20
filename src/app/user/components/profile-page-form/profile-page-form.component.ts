import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { UserActions } from '../../data-access/store/user.actions';

@Component({
	selector: 'app-profile-page-form',
	imports: [
		FormsModule,
		MatButton,
		MatDivider,
		MatIconModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
	],
	templateUrl: './profile-page-form.component.html',
	styleUrl: './profile-page-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageFormComponent {
	readonly #fb = inject(FormBuilder);
	readonly #store = inject(Store);

	form = this.#fb.group(
		{
			avatarImg: [undefined, Validators.pattern(/^https?:\/\//i)],
			email: [undefined, Validators.email],
			newPassword: [
				undefined,
				Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
			],
			confirmNewPassword: [undefined],
			currentPassword: [undefined],
		},
		{
			validators: this.confirmPasswordValidator(
				'newPassword',
				'confirmNewPassword',
			),
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
				if (controlTwo.hasError('match_error')) {
					const errors = { ...controlTwo.errors };
					delete errors['match_error'];
					controlTwo.setErrors(Object.keys(errors).length ? errors : null);
				}
			}
			return null;
		};
	}

	onSubmit() {
		if (
			this.form.controls.currentPassword.dirty &&
			(this.form.controls.newPassword.untouched ||
				this.form.controls.confirmNewPassword.untouched)
		) {
			this.form.controls.newPassword.addValidators(Validators.required);
			this.form.controls.newPassword.updateValueAndValidity();

			this.form.controls.confirmNewPassword.addValidators(Validators.required);
			this.form.controls.confirmNewPassword.updateValueAndValidity();
		}

		if (
			this.form.controls.newPassword.dirty ||
			this.form.controls.confirmNewPassword.dirty
		) {
			this.form.controls.currentPassword.addValidators(Validators.required);
			this.form.controls.currentPassword.updateValueAndValidity();
		}

		if (this.form.valid) {
			this.#store.dispatch(
				UserActions.editUserProfile({
					email: this.form.value.email ?? undefined,
					avatarImg: this.form.value.avatarImg ?? undefined,
					newPassword: this.form.value.newPassword ?? undefined,
					currentPassword: this.form.value.currentPassword ?? undefined,
				}),
			);
		}
	}
}
