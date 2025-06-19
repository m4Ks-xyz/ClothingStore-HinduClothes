import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/components/footer/footer.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { UserActions } from './user/store/user.actions';
import { TOKEN_STORAGE_KEY } from './auth/data-acces/config/api';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NavbarComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	readonly #store = inject(Store);

	ngOnInit() {
		if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
			this.#store.dispatch(UserActions.getUserProfile());
		}
	}
}
