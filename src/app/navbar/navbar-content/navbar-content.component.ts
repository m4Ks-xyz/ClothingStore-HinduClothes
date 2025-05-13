import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MenuCategory } from '../../home/model/menu-content-model';

@Component({
	selector: 'app-navbar-content',
	imports: [],
	templateUrl: './navbar-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarContentComponent {
	showMenContent = input.required<boolean>();
	showWomenContent = input.required<boolean>();
	content = input.required<MenuCategory>();

	hideNavContent = output(); // pytanie czy routing zamknie to czy nie ???
}
