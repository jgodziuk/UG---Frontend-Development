import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { SmartphonesDetailsComponent } from './smartphones-details/smartphones-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SmartphonesComponent,
    SmartphonesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
