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
import { AuthFormDialogService } from '../../services/auth-form-dialog.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-register-form',
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
	templateUrl: './register-form-dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormDialogComponent {
	readonly #fb = inject(FormBuilder);
	readonly #dialogRef = inject(MatDialogRef<LoginFormDialogResult>);
	readonly #destroyRef = inject(DestroyRef);
	readonly #authFormDialogService = inject(AuthFormDialogService);

	form = this.#fb.group({
		eMail: ['', [Validators.email, Validators.required]],
		password: ['', [Validators.required, Validators.minLength(8)]],
		firstName: ['', [Validators.required, Validators.minLength(3)]],
		lastName: ['', [Validators.required, Validators.minLength(3)]],
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

	async openLoginDialog() {
		const dialogRef = await this.#authFormDialogService.openLoginDialog();
		dialogRef
			.afterClosed()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe((data) => {
				if (data) {
					console.log('data here');
				} else {
					console.log('no data here');
				}
			});
	}
}
