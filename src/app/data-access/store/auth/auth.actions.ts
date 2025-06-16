import { createActionGroup, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
	source: 'Auth',
	events: {
		login: props<{ user: any }>(),
		loginSuccess: props<{ user: any }>(),
		loginFailure: props<{ error: any }>(),

		register: props<{ user: any }>(),
		registerSuccess: props<{ user: any }>(),
		registerFailure: props<{ error: any }>(),
	},
});
