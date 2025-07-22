import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
	selector: 'app-auth-form-dialog-actions',
	imports: [MatDialogActions, MatButton, MatDialogClose],
	templateUrl: './auth-form-dialog-actions.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormDialogActionsComponent {
	readonly formSubmited = output<void>();
}
