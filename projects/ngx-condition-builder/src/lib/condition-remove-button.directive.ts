import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[queryRemoveButton]' })
export class NgxConditionRemoveButtonDirective {
  constructor(public template: TemplateRef<any>) {}
}
