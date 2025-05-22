import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../../components/admin/admin.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { AdminProductsComponent } from '../../components/admin-products/admin-products.component';
import { AdminOrdersComponent } from '../../components/admin-orders/admin-orders.component';
import { CustomersComponent } from '../../../customers/customers.component';
import { NewProductComponent } from '../../components/new-product/new-product.component';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'products', component: AdminProductsComponent },
			{ path: 'orders', component: AdminOrdersComponent },
			{ path: 'customers', component: CustomersComponent },
			{ path: 'new-product', component: NewProductComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
