import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : environment.baseHREF }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
