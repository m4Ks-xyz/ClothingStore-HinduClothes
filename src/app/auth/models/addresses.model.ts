import { UserProfileModel } from '../../user/models/user.model';

export interface Addresses {
	firstName: string;
	street: string;
	city: string;
	zipCode: string;
	number: string;
	phoneNumber: string;
	user: UserProfileModel;
}
