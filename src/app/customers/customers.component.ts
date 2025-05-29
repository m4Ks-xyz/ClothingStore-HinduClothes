import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-customers',
	imports: [],
	templateUrl: './customers.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {}
