import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { FilterLayoutComponent } from '../filter-layout/filter-layout.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { IsNaNPipe } from './is-na-n.pipe';

@Component({
	selector: 'app-price-filter',
	imports: [FilterLayoutComponent, MatSliderModule, FormsModule, IsNaNPipe],
	templateUrl: './price-filter.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceFilterComponent {
	readonly minPrice = input<number | undefined>();
	readonly maxPrice = input<number | undefined>();
	readonly currentMinPrice = input<number | undefined>();
	readonly currentMaxPrice = input<number | undefined>();

	readonly priceMinMaxChange = output<{
		min: number | undefined;
		max: number | undefined;
	}>();

	minPriceChange(value: number | undefined) {
		this.priceMinMaxChange.emit({ min: value, max: this.currentMaxPrice() });
	}

	maxPriceChange(value: number | undefined) {
		this.priceMinMaxChange.emit({ min: this.currentMinPrice(), max: value });
	}

	protected readonly isNaN = isNaN;
	protected readonly NaN = NaN;
}
