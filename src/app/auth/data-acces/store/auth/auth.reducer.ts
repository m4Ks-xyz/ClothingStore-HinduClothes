import { createReducer, on } from '@ngrx/store';
import { UserCredentials } from '../../../dialogs/types/user-credentials.model';
import { AuthActions } from './auth.actions';

export interface UserState {
	user: UserCredentials;
	token: string | undefined;
	errorMsg: string | undefined;
}

export const initialState: UserState = {
	user: { email: '', password: '' },
	token: undefined,
	errorMsg: undefined,
};

export const authReducer = createReducer(
	initialState,
	on(AuthActions.loginSuccess, (state, action) => {
		return { ...state, token: action.user.token };
	}),
	on(AuthActions.loginFailure, (state, action) => {
		return { ...state, errorMsg: action.errorMsg };
	}),
	on(AuthActions.registerSuccess, (state, action) => {
		return { ...state, token: action.user.token };
	}),
	on(AuthActions.registerFailure, (state, action) => {
		return { ...state, errorMsg: action.errorMsg };
	}),
);
