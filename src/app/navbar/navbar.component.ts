import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { menuContent } from '../../data/menu-content';
import { MenuContent } from '../home/model/menu-content-model';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';

@Component({
	selector: 'app-navbar',
	imports: [
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		NavbarContentComponent,
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	readonly filterToggleMen = signal<boolean>(false);
	readonly filterToggleWomen = signal<boolean>(false);
	readonly sidenavOpen = signal<boolean>(false);
	readonly showMenContent = signal<boolean>(false);
	readonly showWomenContent = signal<boolean>(true);
	readonly content = signal<MenuContent>(menuContent);
}
