import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
	signal,
} from '@angular/core';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuCategory } from '../../models/menu-content.model';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-mobile-category-accordion',
	imports: [AccordionComponent, MatIconModule, RouterLink],
	templateUrl: './mobile-category-accordion.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileCategoryAccordionComponent {
	readonly content = input.required<MenuCategory>();
	readonly toggleNav = output();

	readonly toggleAccordion = signal<boolean>(false);
}
