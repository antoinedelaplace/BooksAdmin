import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isDoublonValidator(forbiddenValues: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return forbiddenValues.indexOf(control.value) !== -1 ? { forbiddenValue: true } : null;
    };
}
