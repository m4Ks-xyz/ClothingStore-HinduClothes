import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { NavbarUserProfileComponent } from '../navbar-user-profile/navbar-user-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

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
	readonly sidenavStatus = input.required<boolean>();
	readonly sidenavToggle = output<boolean>();
}
