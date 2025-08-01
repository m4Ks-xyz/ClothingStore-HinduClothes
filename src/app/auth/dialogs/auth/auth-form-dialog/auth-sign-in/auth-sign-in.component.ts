import {
	ChangeDetectionStrategy,
	Component,
	inject,
	output,
} from '@angular/core';
import {
	ControlContainer,
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthFormDialogActionsComponent } from '../auth-form-dialog-actions/auth-form-dialog-actions.component';
import { MatInput } from '@angular/material/input';
import { AuthFormDialogStatusComponent } from '../auth-form-dialog-status/auth-form-dialog-status.component';
import { AuthFormDialogResults } from '../../../types/auth-form-dialog.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-auth-sign-in',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		AuthFormDialogActionsComponent,
		MatInput,
		AuthFormDialogStatusComponent,
	],
	templateUrl: './auth-sign-in.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{ provide: ControlContainer, useExisting: FormGroupDirective },
	],
})
export class AuthSignInComponent {
	readonly #fb = inject(FormBuilder);
	readonly dialogRef = inject(MatDialogRef<AuthFormDialogResults>);

	readonly toggleAccountStatus = output<void>();

	form = this.#fb.group({
		email: ['', [Validators.email, Validators.required]],
		password: ['', [Validators.required]],
	});

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			this.dialogRef.close({ credentials: this.form.value, status: 'login' });
		}
	}
}
