export interface AddProductReviewReq {
	productId: string;
	review: string;
	rating: 1 | 2 | 3 | 4 | 5;
}
