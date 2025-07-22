import {
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OrderStatusStep } from '../../../orders/models/order-status-steps.model';
import { OrderStatus } from '../../../orders/types/order-status.type';

@Component({
	selector: 'app-progres-track',
	imports: [MatIconModule],
	templateUrl: './order-tracker.component.html',
	styles: `
		.icon {
			font-size: 36px;
			width: 36px;
			height: 36px;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTrackerComponent {
	readonly steps = input.required<OrderStatusStep[]>();
	readonly activeStep = input.required<OrderStatus>();

	activeStepIndex = computed(() => {
		return this.steps().findIndex((step) => step.title === this.activeStep());
	});
}
