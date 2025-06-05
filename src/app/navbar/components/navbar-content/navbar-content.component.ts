import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MenuCategory } from '../../models/menu-content-model';
import { FeaturedMegaMenuContentComponent } from '../featured-mega-menu-content/featured-mega-menu-content.component';
import { MegaMenuLinkGroupComponent } from '../mega-menu-link-group/mega-menu-link-group.component';

@Component({
	selector: 'app-navbar-content',
	imports: [FeaturedMegaMenuContentComponent, MegaMenuLinkGroupComponent],
	styles: [
		`
			.mat-mdc-icon-button {
				color: #89361b;
			}
		`,
	],
	templateUrl: './navbar-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarContentComponent {
	readonly activeContent = input.required<string>();
	readonly content = input.required<MenuCategory>();

	hideNavContent = output();
}
