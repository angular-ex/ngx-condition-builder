import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryEntity]' })
export class NgxConditionEntityDirective {
  constructor(public template: TemplateRef<any>) {}
}
