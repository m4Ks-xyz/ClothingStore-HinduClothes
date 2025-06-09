import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-admin',
	imports: [RouterOutlet],
	templateUrl: './admin.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminComponent {}
