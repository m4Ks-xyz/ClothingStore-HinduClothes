import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth/auth.effects';
import { authFeature } from './auth/store/auth/auth.selectors';
import { userFeature } from './user/store/user.selectors';
import { UserEffects } from './user/store/user.effects';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withComponentInputBinding()),

		provideStore(),
		provideState(authFeature),
		provideState(userFeature),
		provideHttpClient(),
		provideEffects([AuthEffects, UserEffects]),
	],
};
