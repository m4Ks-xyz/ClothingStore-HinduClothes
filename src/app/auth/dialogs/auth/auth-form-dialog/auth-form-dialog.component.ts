import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthSignInComponent } from './auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';

@Component({
	selector: 'app-auth-form-dialog',
	imports: [
		MatDialogContent,
		MatDialogTitle,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		AuthSignInComponent,
		AuthSignUpComponent,
	],
	templateUrl: './auth-form-dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormDialogComponent {
	readonly haveAccount = signal<boolean>(true);
}
