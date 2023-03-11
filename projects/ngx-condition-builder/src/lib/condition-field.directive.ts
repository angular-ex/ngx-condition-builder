import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryField]' })
export class NgxConditionFieldDirective {
  constructor(public template: TemplateRef<any>) {}
}
