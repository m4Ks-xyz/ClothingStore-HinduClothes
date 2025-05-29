import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'app-address-card',
	imports: [],
	templateUrl: './address-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressCardComponent {
	address = input.required();
}
