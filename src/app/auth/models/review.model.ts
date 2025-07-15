export interface Review {
	_id: string;
	review: string;
	product: string;
	user: UserReviewModel;
	createdAt: Date;
}

export interface UserReviewModel {
	firstName: string;
	lastName: string;
	imageUrl?: string;
}
