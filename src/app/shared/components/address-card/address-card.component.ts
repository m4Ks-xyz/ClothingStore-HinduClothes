import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'app-address-card',
	imports: [],
	templateUrl: './address-card.component.html',
	styleUrl: './address-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressCardComponent {
	address = input.required();
}
