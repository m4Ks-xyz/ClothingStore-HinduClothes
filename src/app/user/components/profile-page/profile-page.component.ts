import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
	selectProfileLoading,
	selectUserProfile,
} from '../../data-access/store/user.selectors';
import { UserProfileModel } from '../../models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddressListComponent } from '../../../checkout/components/address-list/address-list.component';
import { ProfilePageFormComponent } from '../profile-page-form/profile-page-form.component';
import { userActions } from '../../data-access/store/user.actions';
import { EmptyStateMessageComponent } from '../../../shared/components/empty-state-message/empty-state-message.component';
import { NgOptimizedImage } from '@angular/common';
import { LoadingCirleComponent } from '../../../shared/components/loading-cirle/loading-cirle.component';

{
}
@Component({
	selector: 'app-profile-page',
	imports: [
		MatIconModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		AddressListComponent,
		ProfilePageFormComponent,
		EmptyStateMessageComponent,
		NgOptimizedImage,
		LoadingCirleComponent,
	],
	templateUrl: './profile-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfilePageComponent {
	readonly #store = inject(Store);

	readonly userProfile = this.#store.selectSignal<UserProfileModel | undefined>(
		selectUserProfile,
	);

	readonly profileLoading = this.#store.selectSignal(selectProfileLoading);

	deleteAddress(addressId: string) {
		this.#store.dispatch(
			userActions.editUserProfile({ deleteAddressId: addressId }),
		);
	}
}
