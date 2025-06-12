import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormDialogComponent } from '../auth/login-form/login-form-dialog.component';
import {
	LoginFormDialogData,
	LoginFormDialogResult,
} from '../types/login-form-dialog-model';
import { RegisterFormDialogComponent } from '../auth/register-form-dialog/register-form-dialog.component';
import {
	RegisterFormDialogData,
	RegisterFormDialogResults,
} from '../types/register-form-dialog-model';

@Injectable({
	providedIn: 'root',
})
export class AuthFormDialogService {
	readonly #dialog = inject(MatDialog);

	async openLoginDialog() {
		const dialogCmp = await import(
			'../auth/login-form/login-form-dialog.component'
		).then((m) => m.LoginFormDialogComponent);

		return this.#dialog.open<
			LoginFormDialogComponent,
			LoginFormDialogData,
			LoginFormDialogResult
		>(dialogCmp);
	}

	async openRegisterDialog() {
		const dialogCmp = await import(
			'../auth/register-form-dialog/register-form-dialog.component'
		).then((m) => m.RegisterFormDialogComponent);

		return this.#dialog.open<
			RegisterFormDialogComponent,
			RegisterFormDialogData,
			RegisterFormDialogResults
		>(dialogCmp);
	}
}
