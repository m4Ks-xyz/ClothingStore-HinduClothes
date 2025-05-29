import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-new-product',
	imports: [],
	templateUrl: './new-product.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProductComponent {}
