import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/components/footer/footer.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { TOKEN_STORAGE_KEY } from './auth/data-acces/config/api';
import { Store } from '@ngrx/store';
import { UserActions } from './user/store/user.actions';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NavbarComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	readonly #store = inject(Store);

	readonly tokenString = localStorage.getItem(TOKEN_STORAGE_KEY);
	readonly tokenExpirationTime = this.tokenString
		? JSON.parse(this.tokenString).expires
		: undefined;

	constructor() {
		if (this.tokenExpirationTime !== undefined) {
			if (Date.now() > this.tokenExpirationTime) {
				this.#store.dispatch(UserActions.logout());
			}
		}
	}
}
