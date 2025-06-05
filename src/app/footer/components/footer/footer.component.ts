import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { FOOTER_CONTENT } from '../../constants/footer-content.constants';
import { FooterContent } from '../../models/footer-content-model';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	imports: [MatIconModule, AccordionComponent, NgTemplateOutlet, RouterLink],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	readonly footerContent = signal<FooterContent>(FOOTER_CONTENT);
}
