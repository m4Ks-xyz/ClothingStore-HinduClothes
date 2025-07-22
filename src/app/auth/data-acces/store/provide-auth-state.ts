import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authFeature } from './auth.selectors';
import { AuthEffects } from './auth.effects';

export function provideAuthState(): EnvironmentProviders {
	return makeEnvironmentProviders([
		provideState(authFeature),
		provideEffects(AuthEffects),
	]);
}
