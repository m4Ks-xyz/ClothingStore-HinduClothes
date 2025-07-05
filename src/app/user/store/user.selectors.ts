import { createFeature, createSelector } from '@ngrx/store';
import { userReducer } from './user.reducer';

export const userFeature = createFeature({
	name: 'user',
	reducer: userReducer,
});

export const { selectUserProfile } = userFeature;

export const selectAddresses = createSelector([selectUserProfile], (user) => {
	return user?.address;
});
