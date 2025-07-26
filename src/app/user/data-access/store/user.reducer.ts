import { UserProfileModel } from '../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';

export interface UserProfile {
	userProfile: UserProfileModel | undefined;
	profileLoading: boolean;
	errorMsg: string | undefined;
}

export const initialState: UserProfile = {
	userProfile: undefined,
	profileLoading: false,
	errorMsg: undefined,
};

export const userReducer = createReducer(
	initialState,
	on(userActions.getUserProfile, (state) => ({ ...state, loading: true })),
	on(userActions.getUserProfileSuccess, (state, action) => ({
		...state,
		userProfile: action.userProfile,
		profileLoading: false,
	})),
	on(
		userActions.getUserProfileFailure,
		userActions.editUserProfileFailure,
		(state, action) => ({
			...state,
			errorMsg: action.error,
			profileLoading: false,
		}),
	),
	on(userActions.editUserProfile, (state) => ({
		...state,
		profileLoading: true,
	})),
	on(userActions.editUserProfileSuccess, (state, action) => ({
		...state,
		userProfile: action.user,
		profileLoading: false,
	})),
	on(userActions.logout, () => initialState),
);
