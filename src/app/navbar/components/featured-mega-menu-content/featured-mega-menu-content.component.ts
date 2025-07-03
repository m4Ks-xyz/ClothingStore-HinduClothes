import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuCategory } from '../../models/menu-content.model';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-featured-mega-menu-content',
	imports: [RouterLink],
	templateUrl: './featured-mega-menu-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedMegaMenuContentComponent {
	readonly content = input.required<MenuCategory>();
}
