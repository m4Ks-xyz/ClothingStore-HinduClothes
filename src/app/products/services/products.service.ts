import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_FILTERS } from '../constants/filter-data.constant.constant';
import { Filter } from '../models/filter-data.model';
import { Store } from '@ngrx/store';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	readonly activeRoute = inject(ActivatedRoute);
	readonly router = inject(Router);
	readonly #store = inject(Store);

	readonly filterContent: Filter[] = PRODUCT_FILTERS;

	toggleFilter(value: string, name: string): void {
		const queryParams = { ...this.activeRoute.snapshot.queryParams };
		const filterValues = queryParams[name] ? queryParams[name].split(',') : [];

		const valueIndex = filterValues.indexOf(value);

		if (valueIndex !== -1) {
			filterValues.splice(valueIndex, 1);
		} else {
			filterValues.push(value);
		}

		if (filterValues.length > 0) {
			queryParams[name] = filterValues.join(',');
		} else {
			delete queryParams[name];
		}

		this.router.navigate([], { queryParams });
	}
}
