import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsInputComponent),
      multi: true
    }
  ]
})
export class TagsInputComponent implements ControlValueAccessor {

  private tags: string[] = []

  public addTag(tagInput: HTMLInputElement): void {
    const tag = tagInput.value
    if (tag.trim() !== '' && !this.tags.includes(tag)) {
      this.tags.push(tag)
      this.onChange(this.tags)
    }
    tagInput.value = ''
  }

  public removeTag(tag: String): void {
    this.tags = this.tags.filter(t => t != tag)
    this.onChange(this.tags)
  }

  constructor() { }

  onChange: any = () => {}

  onTouch: any = () => {}

  writeValue(obj: any): void {
    this.tags = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void { /* not needed for task */ }


}
