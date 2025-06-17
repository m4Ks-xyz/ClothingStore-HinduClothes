import { createReducer, on } from '@ngrx/store';
import { UserCredentials } from '../../../navbar/dialogs/types/user-credentials.model';
import { AuthActions } from './auth.actions';

export interface UserState {
	user: UserCredentials;
	errorMsg?: string;
}

export const initialState: UserState = {
	user: { email: '', password: '' },
};

export const authReducer = createReducer(
	initialState,
	on(AuthActions.loginSuccess, (state, action) => {
		return { ...state, user: action.user, errorMsg: undefined };
	}),
	on(AuthActions.loginFailure, (state, action) => {
		return { ...state, errorMsg: action.errorMsg };
	}),
	on(AuthActions.registerSuccess, (state, action) => {
		return { ...state, user: action.user, errorMsg: undefined };
	}),
	on(AuthActions.registerFailure, (state, action) => {
		return { ...state, errorMsg: action.errorMsg };
	}),
);
