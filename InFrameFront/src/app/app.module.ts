import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';

import {  HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ConfigService} from './services/config.service';


import { GenericInputComponent } from './components/common/generic-input/generic-input.component';

import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';



// Modules formulaires PrimeNG
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { TicketService } from './services/ticket.service';

export function initializeApp(configService: ConfigService) {
  console.log('initializeApp');
  return ()=>configService.loadConfig() ;
}


@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    CalendarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ColorPickerModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    FileUploadModule,
    SpinnerModule,
    InputMaskModule,
    DropdownModule,
    SelectButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    MenubarModule,
  ],
  providers: [ConfigService,TicketService,
    {provide:APP_INITIALIZER,useFactory:initializeApp,deps:[ConfigService],multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
