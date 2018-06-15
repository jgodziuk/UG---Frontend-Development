import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SmartphoneaddComponent } from './smartphoneadd/smartphoneadd.component';
import { SmartphoneService } from './smartphone.service';

@NgModule({
  declarations: [
    AppComponent,
    SmartphoneaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SmartphoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
