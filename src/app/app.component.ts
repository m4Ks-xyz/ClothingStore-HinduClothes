import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/components/footer/footer.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { TOKEN_STORAGE_KEY } from './auth/data-acces/config/api';
import { Store } from '@ngrx/store';
import { userActions } from './user/data-access/store/user.actions';
import {
	parseStoredToken,
	StoredToken,
} from './shared/validators/check-token-validation.validator';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NavbarComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	readonly #store = inject(Store);

	private readonly tokenData: StoredToken | undefined = parseStoredToken(
		localStorage.getItem(TOKEN_STORAGE_KEY),
	);

	constructor() {
		if (!this.tokenData) {
			localStorage.removeItem(TOKEN_STORAGE_KEY);
			this.#store.dispatch(userActions.logout());
		}

		if (this.tokenData?.expires) {
			if (Date.now() >= this.tokenData.expires) {
				localStorage.removeItem(TOKEN_STORAGE_KEY);
				this.#store.dispatch(userActions.logout());
			}
		}
	}
}
