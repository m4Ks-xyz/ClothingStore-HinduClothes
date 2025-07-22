import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'isNaN',
})
export class IsNaNPipe implements PipeTransform {
	transform(value: number | null | undefined): boolean {
		if (value === undefined || value === null) {
			return true;
		}

		return isNaN(value);
	}
}
