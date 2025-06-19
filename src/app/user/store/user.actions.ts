import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserProfileModel } from '../models/user.model';

export const UserActions = createActionGroup({
	source: 'User',
	events: {
		getUserProfile: emptyProps(),
		getUserProfileSuccess: props<{ userProfile: UserProfileModel }>(),
		getUserProfileFailure: props<{ error: string }>(),

		logout: emptyProps(),
	},
});
