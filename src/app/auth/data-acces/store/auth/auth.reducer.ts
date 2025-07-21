import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { UserActions } from '../../../../user/data-access/store/user.actions';

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
	on(UserActions.logout, () => initialState),
);
