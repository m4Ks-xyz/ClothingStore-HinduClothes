import { UserProfileModel } from '../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';

export interface UserProfile {
	userProfile: UserProfileModel | undefined;
	errorMsg: string | undefined;
}

export const initialState: UserProfile = {
	userProfile: undefined,
	errorMsg: undefined,
};

export const userReducer = createReducer(
	initialState,
	on(userActions.getUserProfile, (state) => ({ ...state, loading: true })),
	on(userActions.getUserProfileSuccess, (state, action) => ({
		...state,
		userProfile: action.userProfile,
	})),
	on(
		userActions.getUserProfileFailure,
		userActions.editUserProfileFailure,
		(state, action) => ({
			...state,
			errorMsg: action.error,
		}),
	),
	on(userActions.editUserProfileSuccess, (state, action) => ({
		...state,
		userProfile: action.user,
	})),
	on(userActions.logout, () => initialState),
);
