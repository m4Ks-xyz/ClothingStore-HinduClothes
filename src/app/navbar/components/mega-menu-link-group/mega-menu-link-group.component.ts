import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuCategory } from '../../models/menu-content-model';

@Component({
	selector: 'app-mega-menu-link-group',
	imports: [RouterLink],
	templateUrl: './mega-menu-link-group.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MegaMenuLinkGroupComponent {
	readonly content = input.required<MenuCategory>();
}
