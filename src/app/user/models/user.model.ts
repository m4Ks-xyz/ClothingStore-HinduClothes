import { Addresses } from '../../auth/models/addresses.model';

export interface UserProfileModel {
	firstName: string;
	lastName: string;
	password: string;
	email: string;
	role: string;
	phoneNumber: string;
	address?: Addresses[];
	paymentInformation: any;
	ratings?: any;
	reviews?: any;
	createdAt?: Date;
}
