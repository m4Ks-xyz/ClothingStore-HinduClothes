import { Addresses } from '../../auth/models/addresses.model';
import { Ratings } from '../../auth/models/ratings.model';
import { Review } from '../../auth/models/review.model';

export interface UserProfileModel {
	firstName: String;
	lastName: String;
	password: String;

	email: String;
	role: String;
	phoneNumber: String;
	address?: Addresses;
	paymentInformation: any;
	ratings?: Ratings[];
	reviews?: Review[];
	createdAt?: Date;
}
