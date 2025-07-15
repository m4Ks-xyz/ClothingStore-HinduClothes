import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RateProductDialogResault } from '../rate-product-dialog-resault.model';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
	RATE_PRODUCT_DIALOG_RATINGS,
	RateProductDialogRatings,
} from '../rate-product-dialog-ratings.constant';

@Component({
	selector: 'app-rate-product-dialog',
	imports: [
		MatDialogModule,
		MatButtonModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
	],
	templateUrl: './rate-product-dialog.component.html',
	styles: [
		`
			form {
				--mat-sys-on-surface-variant: gray;
				--mat-sys-on-surface: black;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateProductDialogComponent {
	readonly #fb = inject(FormBuilder);

	readonly dialogRef = inject(MatDialogRef<RateProductDialogResault>);

	readonly RATE_PRODUCT_DIALOG_RATINGS: RateProductDialogRatings[] =
		RATE_PRODUCT_DIALOG_RATINGS;

	form = this.#fb.group({
		message: [null, [Validators.required, Validators.maxLength(100)]],
		rating: [null, Validators.required],
	});

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			this.dialogRef.close({
				message: this.form.value.message,
				rating: this.form.value.rating,
			});
		}
	}
}
