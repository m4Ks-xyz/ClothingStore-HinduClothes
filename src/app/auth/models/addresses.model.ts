import { UserProfileModel } from '../../user/models/user.model';

export interface Addresses {
	firstName: String;
	street: String;
	city: String;
	zipCode: String;
	number: String;
	phoneNumber: String;
	user: UserProfileModel;
}
