import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { cartFeature } from './cart.selectors';
import { CartEffects } from './cart.effects';

export function provideCartState(): EnvironmentProviders {
	return makeEnvironmentProviders([
		provideState(cartFeature),
		provideEffects(CartEffects),
	]);
}
