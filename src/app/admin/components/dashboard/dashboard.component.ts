import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	imports: [],
	templateUrl: './dashboard.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {}
