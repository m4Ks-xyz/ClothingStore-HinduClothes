import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
	Signal,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthFormDialogService } from '../../../auth/dialogs/services/auth-form-dialog.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { userFeature } from '../../../user/data-access/store/user.selectors';
import { UserProfileModel } from '../../../user/models/user.model';
import { UserService } from '../../../user/data-access/user.service';
import { NgOptimizedImage } from '@angular/common';
import { authActions } from '../../../auth/data-acces/store/auth.actions';

@Component({
	selector: 'app-navbar-user-profile',
	imports: [
		MatButton,
		RouterLink,
		MatIconModule,
		MatMenuModule,
		MatButton,
		MatIconButton,
		NgOptimizedImage,
	],
	templateUrl: './navbar-user-profile.component.html',
	styles: `
		.hide {
			display: none;
		}

		.mat-icon {
			color: black;
		}

		.mat-mdc-icon-button {
			color: #89361b;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarUserProfileComponent {
	readonly #destroyRef = inject(DestroyRef);
	readonly #store = inject(Store);
	readonly #authFormDialogService = inject(AuthFormDialogService);
	readonly #userService = inject(UserService);

	readonly user: Signal<UserProfileModel | undefined> =
		this.#store.selectSignal(userFeature.selectUserProfile);

	async openLoginDialog() {
		const dialogRef = await this.#authFormDialogService.openAuthDialog();
		dialogRef
			.afterClosed()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe((data) => {
				if (data) {
					if (data.status === 'login') {
						this.#store.dispatch(authActions.login({ user: data.credentials }));
					} else {
						this.#store.dispatch(
							authActions.register({ user: data.credentials }),
						);
					}
				}
			});
	}

	logout() {
		this.#userService.logout();
	}
}
