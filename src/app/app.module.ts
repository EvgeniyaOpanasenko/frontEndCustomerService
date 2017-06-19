import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CustomerComponent }  from './customer.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
  BrowserModule,
	ReactiveFormsModule,
	FormsModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent
    
  ],
   providers: [
        CustomerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
