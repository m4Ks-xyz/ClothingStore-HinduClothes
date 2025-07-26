import { createReducer, on } from '@ngrx/store';
import { userActions } from '../../../user/data-access/store/user.actions';
import { authActions } from './auth.actions';

export interface UserState {
	token: string | undefined;
	errorMsg: string | undefined;
}

export const initialState: UserState = {
	token: undefined,
	errorMsg: undefined,
};

export const authReducer = createReducer(
	initialState,
	on(authActions.loginSuccess, (state, action) => {
		return { ...state, token: action.user.token };
	}),
	on(authActions.loginFailure, (state, action) => {
		return { ...state, errorMsg: action.errorMsg };
	}),
	on(authActions.registerSuccess, (state, action) => {
		return { ...state, token: action.user.token };
	}),
	on(authActions.registerFailure, (state, action) => {
		return { ...state, errorMsg: action.errorMsg };
	}),
	on(userActions.logout, () => initialState),
);
