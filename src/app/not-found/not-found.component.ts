import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-not-found',
	imports: [MatAnchor, RouterLink],
	template: `
		<main class="mt-10 flex min-h-[70vh] items-center justify-center">
			<div
				class="container flex flex-col items-center justify-center gap-4 p-4"
			>
				<img src="logo.png" class="w-60" />
				<h1 class="text-center text-xl">
					Looks like this page is so last season — it doesn’t exist anymore.
				</h1>
				<p class="text-center">
					But don't worry, style never goes out of fashion
				</p>

				<div
					class="flex w-8/10 flex-col items-center justify-center gap-4 md:flex-row"
				>
					<a
						class="w-full! rounded-md! md:w-auto"
						routerLink="/"
						mat-raised-button
						>Home</a
					>
					<a
						class="w-full! rounded-md! md:w-auto"
						[routerLink]="['/products/women/clothing/lengha-choli']"
						mat-raised-button
						>Best form Women</a
					>
					<a
						class="w-full! rounded-md! md:w-auto"
						[routerLink]="['/products/men/clothing/kurta']"
						mat-raised-button
						>Best for Men</a
					>
				</div>
			</div>
		</main>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {}
