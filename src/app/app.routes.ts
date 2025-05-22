import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ProductsComponent } from './products/components/products/products.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CheckoutComponent } from './checkout/components/checkout/checkout.component';
import { PaymentComponent } from './checkout/components/payment/payment.component';
import { PaymentSuccessComponent } from './checkout/components/payment-success/payment-success.component';
import { OrdersComponent } from './orders/components/orders/orders.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';

export const routes: Routes = [
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/modules/admin/admin-routing.module').then(
				(m) => m.AdminRoutingModule,
			),
	},
	{ path: '', component: HomeComponent },
	{ path: 'products/:category', component: ProductsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'product-details/:id', component: ProductDetailsComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{ path: 'checkout/payment/:id', component: PaymentComponent },
	{ path: 'payment-success', component: PaymentSuccessComponent },
	{ path: 'account/orders', component: OrdersComponent },
	{ path: 'order/:id', component: OrderDetailsComponent },
];
