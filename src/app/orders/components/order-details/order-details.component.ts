import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AddressCardComponent } from '../../../shared/components/address-card/address-card.component';
import { OrderCardComponent } from '../order-card/order-card.component';
import { OrderTrackerComponent } from '../../../shared/components/order-tracker/order-tracker.component';
import { FILTER_STEPS } from '../../constants/order-status-steps.constant';

@Component({
	selector: 'app-order-details',
	imports: [AddressCardComponent, OrderCardComponent, OrderTrackerComponent],
	templateUrl: './order-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderDetailsComponent {
	readonly orders = signal([4, 5, 6]); // Example data, replace with actual order data
	readonly steps = signal(FILTER_STEPS);
}
