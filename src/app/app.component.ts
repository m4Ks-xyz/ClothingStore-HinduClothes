import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/components/footer/footer.component';
import { HomeComponent } from './home/components/home/home.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
