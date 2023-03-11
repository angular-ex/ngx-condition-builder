import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[querySwitchGroup]' })
export class NgxConditionSwitchGroupDirective {
  constructor(public template: TemplateRef<any>) {}
}
