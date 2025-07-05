import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatNavList } from '@angular/material/list';

@Component({
	selector: 'app-bottom-sheet-mobile',
	imports: [MatButtonModule, MatBottomSheetModule, MatNavList],
	templateUrl: './bottom-sheet-mobile.component.html',
	styleUrl: './bottom-sheet-mobile.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetMobileComponent {}
