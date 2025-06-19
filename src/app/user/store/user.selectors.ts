import { createFeature } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { authFeature } from '../../auth/store/auth/auth.selectors';

export const userFeature = createFeature({
	name: 'auth',
	reducer: userReducer,
});

export const { selectUser, selectErrorMsg } = authFeature;
