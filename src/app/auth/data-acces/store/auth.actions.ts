import { createActionGroup, props } from '@ngrx/store';
import { UserCredentials } from '../../dialogs/types/user-credentials.model';
import { AuthResponseModel } from '../../models/auth-response.model';

export const authActions = createActionGroup({
	source: 'Auth',
	events: {
		login: props<{ user: UserCredentials }>(),
		loginSuccess: props<{ user: AuthResponseModel }>(),
		loginFailure: props<{ errorMsg: string }>(),

		register: props<{ user: UserCredentials }>(),
		registerSuccess: props<{ user: AuthResponseModel }>(),
		registerFailure: props<{ errorMsg: string }>(),
	},
});
