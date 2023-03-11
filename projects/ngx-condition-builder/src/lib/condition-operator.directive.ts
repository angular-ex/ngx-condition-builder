import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryOperator]' })
export class NgxConditionOperatorDirective {
  constructor(public template: TemplateRef<any>) {}
}
