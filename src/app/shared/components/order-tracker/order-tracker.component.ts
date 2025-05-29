import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OrderStatusStep } from '../../../orders/models/order-status-steps.model';

@Component({
	selector: 'app-order-tracker',
	imports: [MatIconModule],
	templateUrl: './order-tracker.component.html',
	styleUrl: './order-tracker.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTrackerComponent {
	readonly steps = input.required<OrderStatusStep[]>();
	readonly activeStep = input.required<OrderStatusStep>();
}
