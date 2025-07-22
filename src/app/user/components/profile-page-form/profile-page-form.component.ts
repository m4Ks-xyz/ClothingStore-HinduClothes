import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { userActions } from '../../data-access/store/user.actions';
import { matchFieldsValidator } from '../../../shared/validators/match-fields-validator';

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
	styles: `
		form {
			--mat-sys-on-surface-variant: black;
		}
	`,
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
			validators: matchFieldsValidator(`newPassword`, `confirmNewPassword`),
		},
	);

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
				userActions.editUserProfile({
					email: this.form.value.email ?? undefined,
					avatarImg: this.form.value.avatarImg ?? undefined,
					newPassword: this.form.value.newPassword ?? undefined,
					currentPassword: this.form.value.currentPassword ?? undefined,
				}),
			);
		}
	}
}
