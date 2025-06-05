import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuCategory } from '../../models/menu-content-model';

@Component({
	selector: 'app-featured-mega-menu-content',
	imports: [],
	templateUrl: './featured-mega-menu-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedMegaMenuContentComponent {
	readonly content = input.required<MenuCategory>();
}
