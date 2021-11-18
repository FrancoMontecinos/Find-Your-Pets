import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AdoptComponent } from './post/adopt/adopt.component';

@NgModule({
  declarations: [
    AppComponent,
    //AdoptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Al importarlo aquí me permite poder hacer peticiones http en otros lugares de mi aplicación si lo requiero.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
