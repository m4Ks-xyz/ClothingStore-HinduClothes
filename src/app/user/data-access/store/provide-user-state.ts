import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userFeature } from './user.selectors';
import { UserEffects } from './user.effects';

export function provideUserState(): EnvironmentProviders {
	return makeEnvironmentProviders([
		provideState(userFeature),
		provideEffects(UserEffects),
	]);
}
