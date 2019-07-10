import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EditModeDirective} from './directives/edit-mode.directive';
import {ViewModeDirective} from './directives/view-mode.directive';
import {EditableComponent} from './editable/editable.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditModeDirective,
    ViewModeDirective,
    EditableComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
