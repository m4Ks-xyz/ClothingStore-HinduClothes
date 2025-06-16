import { UserCredentials } from './user-credentials.model';

export interface AuthFormDialogData {
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
}

export type AuthFormDialogResults = UserCredentials;
