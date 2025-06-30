import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './auth/data-acces/store/auth/auth.effects';
import { authFeature } from './auth/data-acces/store/auth/auth.selectors';
import { userFeature } from './user/store/user.selectors';
import { UserEffects } from './user/store/user.effects';
import { ProductsFeature } from './products/data-access/store/products/products.selectors';
import { ProductsEffects } from './products/data-access/store/products/products.effects';
import { cartFeature } from './cart/data-access/store/cart/cart.selectors';
import { CartEffects } from './cart/data-access/store/cart/cart.effects';
import { orderFeature } from './orders/data-access/store/order.selectors';
import { OrderEffects } from './orders/data-access/store/order.effects';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withComponentInputBinding()),

		provideStore(),
		provideState(authFeature),
		provideState(userFeature),
		provideState(ProductsFeature),
		provideState(cartFeature),
		provideState(orderFeature),
		provideHttpClient(),
		provideEffects([
			AuthEffects,
			UserEffects,
			ProductsEffects,
			OrderEffects,
			CartEffects,
			UserEffects,
		]),
	],
};
