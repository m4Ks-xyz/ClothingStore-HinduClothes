import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ProductsComponent } from './products/components/products/products.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'products',
		component: ProductsComponent,
	},
];
