import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthFormDialogComponent } from '../auth/auth-form-dialog/auth-form-dialog.component';
import {
	AuthFormDialogData,
	AuthFormDialogResults,
} from '../types/auth-form-dialog.model';

@Injectable({
	providedIn: 'root',
})
export class AuthFormDialogService {
	readonly #dialog = inject(MatDialog);

	async openAuthDialog() {
		const dialogCmp = await import(
			'../auth/auth-form-dialog/auth-form-dialog.component'
		).then((m) => m.AuthFormDialogComponent);

		return this.#dialog.open<
			AuthFormDialogComponent,
			AuthFormDialogData,
			AuthFormDialogResults
		>(dialogCmp);
	}
}
