import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_FILTERS } from '../constants/filter-data.constant.constant';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	readonly activeRoute = inject(ActivatedRoute);
	readonly router = inject(Router);

	readonly filterContent = PRODUCT_FILTERS;

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

		if (name === 'sort') {
			queryParams[name] = value;
		}

		if (name === 'price') {
			queryParams[name] = value;
		}

		this.router.navigate([], { queryParams });
	}
}
