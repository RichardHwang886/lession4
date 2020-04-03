import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { Mycomp2Component } from './mycomp2/mycomp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    Mycomp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
