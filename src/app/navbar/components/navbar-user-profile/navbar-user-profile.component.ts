import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

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
export class NavbarUserProfileComponent {}
