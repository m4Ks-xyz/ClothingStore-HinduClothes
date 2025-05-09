import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
