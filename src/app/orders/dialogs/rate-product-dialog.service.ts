import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateProductDialogComponent } from './rate-product-dialog/rate-product-dialog.component';
import { RateProductDialogData } from './rate-product-dialog-data.model';
import { RateProductDialogResult } from './rate-product-dialog-resault.model';

@Injectable({ providedIn: 'root' })
export class RateProductDialogService {
	readonly #dialog = inject(MatDialog);

	async openRateProductDialog() {
		const dialogCmp = await import(
			'./rate-product-dialog/rate-product-dialog.component'
		).then((m) => m.RateProductDialogComponent);

		return this.#dialog.open<
			RateProductDialogComponent,
			RateProductDialogData,
			RateProductDialogResult
		>(dialogCmp);
	}
}
