import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserProfileModel } from '../../models/user.model';
import { UserEditReq } from '../user-edit-req.model';

export const userActions = createActionGroup({
	source: 'User',
	events: {
		getUserProfile: emptyProps(),
		getUserProfileSuccess: props<{ userProfile: UserProfileModel }>(),
		getUserProfileFailure: props<{ error: string }>(),

		editUserProfile: props<UserEditReq>(),
		editUserProfileSuccess: props<{ user: UserProfileModel }>(),
		editUserProfileFailure: props<{ error: string }>(),

		logout: emptyProps(),
		skipLoadingUserProfile: emptyProps(),
	},
});
