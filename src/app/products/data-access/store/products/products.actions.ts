import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProductParams } from '../../services/product-api.service';
import { ProductsSearchResponseModel } from '../../../models/products-search.response.model';
import { ProductModelRes } from '../../../models/product.model';
import { Review } from '../../../../auth/models/review.model';
import { AddProductReviewReq } from '../../../models/add-product-review-req.model';
import { Rating } from '../../../../auth/models/ratings.model';
import { HomeFeaturedItems } from '../../../models/home-featured-items.model';

export const productsActions = createActionGroup({
	source: 'Products',
	events: {
		findProductByCategory: props<{ params: ProductParams }>(),
		findProductByCategorySuccess: props<{
			products: ProductsSearchResponseModel;
		}>(),
		findProductByCategoryFailure: props<{ error: Error }>(),

		findProductById: props<{ _id: string }>(),
		findProductByIdSuccess: props<{ product: ProductModelRes }>(),
		findProductByIdFailure: props<{ error: string }>(),

		addProductReview: props<{ product: AddProductReviewReq }>(),
		addProductReviewSuccess: props<{ review: Review[]; rating: Rating[] }>(),
		addProductReviewFailure: props<{ error: string }>(),

		getProductReviews: props<{ productId: string }>(),
		getProductReviewsSuccess: props<{ review: Review[]; rating: Rating[] }>(),
		getProductReviewsFailure: props<{ error: string }>(),

		getHomePageProducts: emptyProps(),
		getHomePageProductsSuccess: props<{ products: HomeFeaturedItems[] }>(),
		getHomePageProductsFailure: props<{ error: string }>(),
	},
});
