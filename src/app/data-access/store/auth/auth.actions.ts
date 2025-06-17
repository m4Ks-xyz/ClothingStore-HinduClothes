import { createActionGroup, props } from '@ngrx/store';
import { UserCredentials } from '../../../navbar/dialogs/types/user-credentials.model';
import { LoginResponseModel } from '../../services/models/login-response.model';

export const AuthActions = createActionGroup({
	source: 'Auth',
	events: {
		login: props<{ user: UserCredentials }>(),
		loginSuccess: props<{ user: LoginResponseModel }>(),
		loginFailure: props<{ errorMsg: string }>(),

		register: props<{ user: UserCredentials }>(),
		registerSuccess: props<{ user: LoginResponseModel }>(),
		registerFailure: props<{ errorMsg: string }>(),
	},
});
