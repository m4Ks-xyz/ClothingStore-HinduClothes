import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { OrderEffects } from './store/order.effects';
import { provideState } from '@ngrx/store';
import { orderFeature } from './store/order.selectors';

export function provideOrdersState(): EnvironmentProviders {
	return makeEnvironmentProviders([
		provideState(orderFeature),
		provideEffects(OrderEffects),
	]);
}
