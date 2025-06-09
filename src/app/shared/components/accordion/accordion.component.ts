import {
	ChangeDetectionStrategy,
	Component,
	input,
	signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { generateUUID } from '../../utils/random/random-uuid-util';

@Component({
	selector: 'app-accordion',
	imports: [MatIconModule],
	templateUrl: './accordion.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
	readonly name = input.required();
	readonly isOpen = signal(false);

	readonly randomId = signal(generateUUID());
}
