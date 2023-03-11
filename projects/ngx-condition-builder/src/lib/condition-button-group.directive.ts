import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryButtonGroup]' })
export class NgxConditionButtonGroupDirective {
  constructor(public template: TemplateRef<any>) {}
}
