import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productsFeature } from './products.selectors';
import { ProductsEffects } from './products.effects';

export function provideProductsState(): EnvironmentProviders {
	return makeEnvironmentProviders([
		provideState(productsFeature),
		provideEffects(ProductsEffects),
	]);
}
