import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_FILTERS } from '../constants/filter-data.constant.constant';
import { MEN_JEANS } from '../constants/Men/men-jeans.constant';
import { MEN_KURTA } from '../constants/Men/men-kurta.constant';
import { SHOES } from '../constants/shoes.constant';
import { WOMEN_GOUNS } from '../constants/Women/gouns.constant';
import { WOMEN_LENGA_CHOLI } from '../constants/Women/lengha-choli.constant';
import { WOMEN_KURTA } from '../constants/Women/women-kurta.constant';
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

	readonly menJeans = signal<MenJeans[]>(MEN_JEANS);
	readonly womenGouns = signal<WomenGouns[]>(WOMEN_GOUNS);
	readonly womenKurta = signal<WomenKurta[]>(WOMEN_KURTA);
	readonly menKurta = signal<MenKurta[]>(MEN_KURTA);
	readonly shoes = signal<Shoes[]>(SHOES);
	readonly lenghaCholi = signal<LengaCholi[]>(WOMEN_LENGA_CHOLI);

	readonly filterContent: Filter[] = PRODUCT_FILTERS;

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
