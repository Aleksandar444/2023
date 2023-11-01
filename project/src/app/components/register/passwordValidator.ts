import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {



    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasLowerCase = /[a-z]/.test(control.value);
    const hasDigit = /[0-9]/.test(control.value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);

    const valid = hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter;
    return valid ? null : { invalidPassword: true };
  };
}
