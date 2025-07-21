import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
	output,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { NavbarUserProfileComponent } from '../navbar-user-profile/navbar-user-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTotalCartItems } from '../../../cart/data-access/store/cart/cart.selectors';

@Component({
	selector: 'app-navbar-actions',
	imports: [
		MatIconModule,
		MatIconButton,
		NavbarUserProfileComponent,
		MatIconModule,
		RouterLink,
	],
	templateUrl: './navbar-actions.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarActionsComponent {
	readonly #store = inject(Store);
	readonly sidenavStatus = input.required<boolean>();

	readonly cartItemsCount = this.#store.selectSignal(selectTotalCartItems);

	readonly sidenavToggle = output<boolean>();
}
