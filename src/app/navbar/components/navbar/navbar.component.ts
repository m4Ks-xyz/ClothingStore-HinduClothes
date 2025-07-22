import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MENU_CONTENT } from '../../constants/menu-content.constants';
import { MenuCategory } from '../../models/menu-content.model';
import { NavbarContentComponent } from '../navbar-content/navbar-content.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { NavbarDesktopLinksComponent } from '../navbar-desktop-links/navbar-desktop-links.component';
import { NavbarActionsComponent } from '../navbar-actions/navbar-actions.component';

@Component({
	selector: 'app-navbar',
	imports: [
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		NavbarContentComponent,
		MobileNavbarComponent,
		NavbarDesktopLinksComponent,
		NavbarActionsComponent,
	],
	templateUrl: './navbar.component.html',
	styles: `
		.mat-mdc-menu-panel {
			box-shadow: unset !important;
		}

		.icon-close {
			width: auto;
			height: auto;
			font-size: 2.125rem;
		}

		.profile-menu {
			color: black !important;
		}

		.icon {
			color: black !important;
			transition: all 200ms ease-in-out;

			&:hover {
				color: #89361b;
			}
		}

		.button {
			text-transform: uppercase;
			transition: all 200ms ease-in-out;

			&:hover {
				background-color: #89361b;
				color: white;
			}
		}

		.show {
			display: block;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	readonly sidenavOpen = signal<boolean>(false);
	readonly content = signal<MenuCategory[]>(MENU_CONTENT);
	readonly activeContent = signal<string>('none');
}
