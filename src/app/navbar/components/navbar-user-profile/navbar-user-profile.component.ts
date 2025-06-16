import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthFormDialogService } from '../../dialogs/services/auth-form-dialog.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-navbar-user-profile',
	imports: [
		MatButton,
		RouterLink,
		MatIconModule,
		MatMenuModule,
		MatButton,
		MatIconButton,
	],
	templateUrl: './navbar-user-profile.component.html',
	styleUrl: './navbar-user-profile.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarUserProfileComponent {
	readonly #destroyRef = inject(DestroyRef);
	readonly #authFormDialogService = inject(AuthFormDialogService);

	async openLoginDialog() {
		const dialogRef = await this.#authFormDialogService.openAuthDialog();
		dialogRef
			.afterClosed()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe((data) => {
				if (data) {
					console.log(
						`email:${data.email}  passw: ${data.password} name: ${data.firstName} lastName: ${data.lastName}`,
					);
				} else {
					console.log('no data here');
				}
			});
	}
}
