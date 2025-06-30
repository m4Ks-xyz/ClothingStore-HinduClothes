import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { Filter } from '../../../models/filter-data.model';
import { FilterLayoutComponent } from '../filter-layout/filter-layout.component';

@Component({
	selector: 'app-stock-filter',
	imports: [MatCheckbox, FilterLayoutComponent],
	templateUrl: './stock-filter.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockFilterComponent {
	readonly stock = input.required<Filter>();
	readonly selectedStock = input();

	readonly changeStock = output<string | undefined>();

	valueChanged(value: string) {
		if (value === this.selectedStock()) {
			return this.changeStock.emit(undefined);
		}
		return this.changeStock.emit(value);
	}
}
