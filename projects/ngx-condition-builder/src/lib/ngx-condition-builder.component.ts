import {
  Component,
  forwardRef,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

export const CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxConditionBuilderComponent),
  multi: true,
};

export const VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NgxConditionBuilderComponent),
  multi: true,
};

@Component({
  selector: 'ngx-condition-builder',
  template: ` <p>ngx-condition-builder works!</p> `,
  styles: [],
  providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR],
})
export class NgxConditionBuilderComponent
  implements OnInit, OnChanges, ControlValueAccessor, Validator
{
  //#region OnInit Implementation
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region OnChanges Implementation
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region Validator Implementation
  validate(control: AbstractControl): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region ControlValueAccessor Implementation
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  //#endregion
}
