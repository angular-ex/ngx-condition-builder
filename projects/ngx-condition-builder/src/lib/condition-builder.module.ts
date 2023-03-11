import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxConditionArrowIconDirective } from './condition-arrow-icon.directive';
import { NgxConditionBuilderComponent } from './condition-builder.component';
import { NgxConditionButtonGroupDirective } from './condition-button-group.directive';
import { NgxConditionEmptyWarningDirective } from './condition-empty-warning.directive';
import { NgxConditionEntityDirective } from './condition-entity.directive';
import { NgxConditionFieldDirective } from './condition-field.directive';
import { NgxConditionInputDirective } from './condition-input.directive';
import { NgxConditionOperatorDirective } from './condition-operator.directive';
import { NgxConditionRemoveButtonDirective } from './condition-remove-button.directive';
import { NgxConditionSwitchGroupDirective } from './condition-switch-group.directive';



@NgModule({
  declarations: [
    NgxConditionBuilderComponent,
    NgxConditionInputDirective,
    NgxConditionOperatorDirective,
    NgxConditionFieldDirective,
    NgxConditionEntityDirective,
    NgxConditionButtonGroupDirective,
    NgxConditionSwitchGroupDirective,
    NgxConditionRemoveButtonDirective,
    NgxConditionEmptyWarningDirective,
    NgxConditionArrowIconDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxConditionBuilderComponent,
    NgxConditionInputDirective,
    NgxConditionOperatorDirective,
    NgxConditionFieldDirective,
    NgxConditionEntityDirective,
    NgxConditionButtonGroupDirective,
    NgxConditionSwitchGroupDirective,
    NgxConditionRemoveButtonDirective,
    NgxConditionEmptyWarningDirective,
    NgxConditionArrowIconDirective,
  ]
})
export class NgxConditionBuilderModule { }
