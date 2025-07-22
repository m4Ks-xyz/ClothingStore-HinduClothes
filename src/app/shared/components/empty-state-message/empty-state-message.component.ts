import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-empty-state-message',
	imports: [],
	template: ` <div class="flex h-[80vh] items-center justify-center pt-16">
		<p class="text-center text-2xl"><ng-content /></p>
	</div>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateMessageComponent {}
