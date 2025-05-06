import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenJeans } from '../model/men-jeans.model';

@Component({
	selector: 'app-home-product-card',
	imports: [],
	templateUrl: './home-product-card.component.html',
	styleUrl: './home-product-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductCardComponent {
	product = input.required<MenJeans>();
}
