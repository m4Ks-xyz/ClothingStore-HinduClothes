import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MenuCategory } from '../../models/menu-content.model';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

@Component({
	selector: 'app-featured-mega-menu-content',
	imports: [ProductCardComponent],
	templateUrl: './featured-mega-menu-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedMegaMenuContentComponent {
	readonly content = input.required<MenuCategory>();

	readonly closeMegaMenu = output<void>();
}
