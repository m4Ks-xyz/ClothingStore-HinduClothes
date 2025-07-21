import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchFieldsValidator(
	controlOneName: string,
	controlTwoName: string,
): ValidatorFn {
	return (group: AbstractControl) => {
		const controlOne = group.get(controlOneName);
		const controlTwo = group.get(controlTwoName);

		if (!controlOne || !controlTwo)
			throw new Error('controlOne or Two does not exist');

		if (controlOne.value !== controlTwo.value) {
			controlTwo.setErrors({ match_error: true });
		} else if (controlTwo.hasError(`match_error`)) {
			const errors = { ...controlTwo.errors };
			delete errors['match_error'];
			controlTwo.setErrors(Object.keys(errors).length ? errors : null);
		}
		return null;
	};
}
