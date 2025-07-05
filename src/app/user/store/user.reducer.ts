import { UserProfileModel } from '../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export interface UserProfile {
	userProfile: UserProfileModel | undefined;
	loading: boolean;
	errorMsg: string | undefined;
}

export const initialState: UserProfile = {
	userProfile: undefined,
	loading: false,
	errorMsg: undefined,
};

export const userReducer = createReducer(
	initialState,
	on(UserActions.getUserProfile, (state) => ({ ...state, loading: true })),
	on(UserActions.getUserProfileSuccess, (state, action) => ({
		...state,
		userProfile: action.userProfile,
	})),
	on(UserActions.getUserProfileFailure, (state, action) => ({
		...state,
		errorMsg: action.error,
	})),
	on(UserActions.logout, () => initialState),
);
