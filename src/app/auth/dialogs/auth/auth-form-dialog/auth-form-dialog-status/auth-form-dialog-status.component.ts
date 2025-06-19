import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
	selector: 'app-auth-form-dialog-status',
	imports: [],
	templateUrl: './auth-form-dialog-status.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormDialogStatusComponent {
	readonly haveAccountToggle = output<void>();
}
