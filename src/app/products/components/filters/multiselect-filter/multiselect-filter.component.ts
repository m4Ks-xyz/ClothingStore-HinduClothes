import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { FilterLayoutComponent } from '../filter-layout/filter-layout.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { Filter } from '../../../models/filter-data.model';

@Component({
	selector: 'app-multiselect-filter',
	imports: [FilterLayoutComponent, MatCheckbox],
	templateUrl: './multiselect-filter.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiselectFilterComponent {
	readonly filter = input.required<Filter>();
	readonly selectedFilter = input([], {
		transform: (v: string[] | undefined) => v ?? [],
	});

	readonly changeStock = output<string[]>();

	valueChanged(value: string) {
		if (this.selectedFilter()?.includes(value)) {
			return this.changeStock.emit(
				this.selectedFilter()?.filter((v) => v !== value),
			);
		}
		return this.changeStock.emit([...this.selectedFilter(), value]);
	}
}
