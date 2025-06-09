import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-order-card',
	imports: [RouterLink],
	templateUrl: './order-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCardComponent {}
