import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryArrowIcon]' })
export class NgxConditionArrowIconDirective {
  constructor(public template: TemplateRef<any>) {}
}
