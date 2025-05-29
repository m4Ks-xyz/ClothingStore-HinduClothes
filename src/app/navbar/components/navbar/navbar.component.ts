import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { MENU_CONTENT } from '../../constants/menu-content.constants';
import { MenuContent } from '../../models/menu-content-model';
import { NavbarContentComponent } from '../navbar-content/navbar-content.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-navbar',
	imports: [
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		NavbarContentComponent,
		AccordionComponent,
		RouterLink,
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
	readonly showWomenContent = signal<boolean>(false);
	readonly content = signal<MenuContent>(MENU_CONTENT);

	hideNavContent(): void {
		this.showMenContent.set(false);
		this.showWomenContent.set(false);
	}
}
