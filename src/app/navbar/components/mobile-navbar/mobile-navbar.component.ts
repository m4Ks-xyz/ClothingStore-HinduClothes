import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MenuCategory } from '../../models/menu-content.model';
import { MobileCategoryAccordionComponent } from '../mobile-category-accordion/mobile-category-accordion.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-mobile-navbar',
	imports: [
		MatDrawer,
		MatDrawerContainer,
		MatIconModule,
		MobileCategoryAccordionComponent,
		RouterLink,
		NgOptimizedImage,
	],
	templateUrl: './mobile-navbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavbarComponent {
	readonly sidenavStatus = input.required<boolean>();
	readonly content = input.required<MenuCategory[]>();

	readonly sidenavToggle = output<boolean>();
}
