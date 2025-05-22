import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filters } from '../constants/filter-data.constant.constant';
import { menJeans } from '../constants/Men/men-jeans.constant';
import { menKurta } from '../constants/Men/men-kurta.constant';
import { shoes } from '../constants/shoes.constant';
import { gounsPage1 } from '../constants/Women/gouns.constant';
import { lengaCholi } from '../constants/Women/lengha-choli.constant';
import { womenKurta } from '../constants/Women/women-kurta.constant';
import { Filter } from '../models/filter-data.model';
import { WomenGouns } from '../models/gouns-model';
import { LengaCholi } from '../models/lenga-choli-model';
import { MenJeans } from '../models/men-jeans.model';
import { MenKurta } from '../models/men-kurta-model';
import { Shoes } from '../models/shoes-model';
import { WomenKurta } from '../models/women-kurta-model';
import { ProductCategory } from '../types/product-catergory.type';
import { UnknownProduct } from '../types/unknown-product.type';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	readonly activeRoute = inject(ActivatedRoute);
	readonly router = inject(Router);

	readonly menJeans = signal<MenJeans[]>(menJeans);
	readonly womenGouns = signal<WomenGouns[]>(gounsPage1);
	readonly womenKurta = signal<WomenKurta[]>(womenKurta);
	readonly menKurta = signal<MenKurta[]>(menKurta);
	readonly shoes = signal<Shoes[]>(shoes);
	readonly lenghaCholi = signal<LengaCholi[]>(lengaCholi);

	readonly filterContent: Filter[] = filters;

	currentProduct(productCategory: ProductCategory): UnknownProduct[] {
		switch (productCategory) {
			case 'lenghaCholi':
				return this.lenghaCholi();
			case 'menJeans':
				return this.menJeans();
			case 'shoes':
				return this.shoes();
			case 'menKurta':
				return this.menKurta();
			case 'womenGouns':
				return this.womenGouns();
			case 'womenKurta':
				return this.womenKurta();
		}
	}

	multipleSelectFilter(value: string, name: string): void {
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
