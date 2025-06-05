import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
	signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_DESKTOP_LINKS } from '../../constants/navbar-desktop-links.constant';

@Component({
	selector: 'app-navbar-desktop-links',
	imports: [RouterLink],
	templateUrl: './navbar-desktop-links.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDesktopLinksComponent {
	readonly sidenavOpen = input.required<boolean>();

	readonly activeContent = output<string>();

	readonly links = signal(NAV_DESKTOP_LINKS);
}
