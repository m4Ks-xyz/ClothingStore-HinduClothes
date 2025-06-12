import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
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
import { LoginFormDialogResult } from '../../types/login-form-dialog-model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthFormDialogService } from '../../services/auth-form-dialog.service';

@Component({
	selector: 'app-login-form',
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
	templateUrl: './login-form-dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormDialogComponent {
	readonly #fb = inject(FormBuilder);
	readonly #dialogRef = inject(MatDialogRef<LoginFormDialogResult>);
	readonly #destroyRef = inject(DestroyRef);
	readonly #authFormDialogService = inject(AuthFormDialogService);

	form = this.#fb.group({
		eMail: ['', [Validators.email, Validators.required]],
		password: ['', [Validators.required, Validators.minLength(8)]],
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

	async openRegisterDialog() {
		const dialogRef = await this.#authFormDialogService.openRegisterDialog();
		dialogRef
			.afterClosed()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe((data) => {
				if (data) {
					console.log('data here');
				} else console.log('not data');
			});
	}
}
