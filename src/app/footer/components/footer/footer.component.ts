import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { footerContent } from '../../constants/footer-content.constants';
import { FooterContent } from '../../models/footer-content-model';

@Component({
	selector: 'app-footer',
	imports: [MatIconModule, AccordionComponent, NgTemplateOutlet],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	readonly categoriesToggle = signal(false);
	readonly informationToggle = signal(false);
	readonly useFulLinksToggle = signal(false);
	readonly footerContent = signal<FooterContent>(footerContent);

	getToggledContentId(id: string) {
		switch (id) {
			case 'categories':
				return this.categoriesToggle;
			case 'information':
				return this.informationToggle;
			case 'useFulLinks':
				return this.useFulLinksToggle;
			default:
				throw new Error(`Unknown toggle ID: ${id}`);
		}
	}
}
