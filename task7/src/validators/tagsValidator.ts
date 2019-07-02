import {AbstractControl, ValidatorFn} from '@angular/forms';

export default function tagsValidator(tags: String[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value: String[] = control.value;
    const notPredefined = value.filter(v => !tags.includes(v))
    return notPredefined.length ? {'notPredefinedTags': {value: notPredefined}} : null;
  };
}
