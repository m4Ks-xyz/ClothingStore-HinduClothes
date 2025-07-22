import {
	ApplicationConfig,
	isDevMode,
	LOCALE_ID,
	provideZoneChangeDetection,
} from '@angular/core';
import {
	provideRouter,
	withComponentInputBinding,
	withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideOrdersState } from './orders/data-access/provide-orders-state';
import { provideAuthState } from './auth/data-acces/store/provide-auth-state';
import { provideUserState } from './user/data-access/store/provide-user-state';
import { provideProductsState } from './products/data-access/store/products/provide-products-state';
import { provideCartState } from './cart/data-access/store/cart/provide-cart-state';

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: LOCALE_ID, useValue: 'en-IN' },

		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(
			routes,
			withComponentInputBinding(),
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			}),
		),

		provideStore(),
		provideOrdersState(),
		provideAuthState(),
		provideUserState(),
		provideProductsState(),
		provideCartState(),
		provideHttpClient(),

		provideStoreDevtools({
			maxAge: 25, // Retains last 25 states
			logOnly: !isDevMode(), // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
			trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
			traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
			connectInZone: true, // If set to true, the connection is established within the Angular zone
		}),
	],
};
