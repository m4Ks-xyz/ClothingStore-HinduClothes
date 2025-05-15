import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MenuCategory } from '../models/menu-content-model';

@Component({
	selector: 'app-navbar-content',
	imports: [],
	templateUrl: './navbar-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarContentComponent {
	readonly showMenContent = input.required<boolean>();
	readonly showWomenContent = input.required<boolean>();
	readonly content = input.required<MenuCategory>();

	hideNavContent = output(); // pytanie czy routing zamknie to czy nie ???
}
