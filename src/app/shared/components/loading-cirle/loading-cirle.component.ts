import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-loading-cirle',
	imports: [NgOptimizedImage],
	template: ` <img ngSrc="loading.gif" width="80" height="80" /> `,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingCirleComponent {}
