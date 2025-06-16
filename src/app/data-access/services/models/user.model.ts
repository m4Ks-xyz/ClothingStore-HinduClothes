import { Addresses } from './addresses.model';
import { Ratings } from './ratings.model';
import { Review } from './review.model';

export interface User {
	firstName: String;
	lastName: String;
	password: String;

	email: String;
	role: String;
	phoneNumber: String;
	address: Addresses;
	paymentInformation: any;
	ratings: Ratings[];
	reviews: Review[];
	createdAt: Date;
}
