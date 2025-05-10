import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
	selector: 'app-navbar',
	imports: [MatSidenavModule, MatButtonModule, MatIconModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	readonly filterToggle = signal<boolean>(false);
	readonly sidenavOpen = signal<boolean>(false);
}
