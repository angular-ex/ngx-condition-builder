import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxConditionBuilderModule } from '@angular-ex/ngx-condition-builder';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxConditionBuilderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
