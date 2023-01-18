import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateControlComponent } from './generate-control/generate-control.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { RadioComponent } from './controls/radio/radio.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { NumberInputComponent } from './controls/number-input/number-input.component';
import { DateInputComponent } from './controls/date-input/date-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import { DateRangeInputComponent } from './controls/date-range-input/date-range-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateControlComponent,
    CheckboxComponent,
    TextInputComponent,
    RadioComponent,
    DropdownComponent,
    TextareaComponent,
    NumberInputComponent,
    DateInputComponent,
    GenerateFormComponent,
    DateRangeInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
