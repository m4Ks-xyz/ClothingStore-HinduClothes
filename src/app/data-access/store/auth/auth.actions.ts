import { createActionGroup, props } from '@ngrx/store';
import { UserCredentials } from '../../../navbar/dialogs/types/user-credentials.model';

export const AuthActions = createActionGroup({
	source: 'Auth',
	events: {
		login: props<{ user: UserCredentials }>(),
		loginSuccess: props<{ user: UserCredentials }>(),
		loginFailure: props<{ errorMsg: string }>(),

		register: props<{ user: UserCredentials }>(),
		registerSuccess: props<{ user: UserCredentials }>(),
		registerFailure: props<{ errorMsg: string }>(),
	},
});
