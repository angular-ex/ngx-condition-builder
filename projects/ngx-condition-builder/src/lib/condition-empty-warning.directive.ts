import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryEmptyWarning]' })
export class NgxConditionEmptyWarningDirective {
  constructor(public template: TemplateRef<any>) {}
}
