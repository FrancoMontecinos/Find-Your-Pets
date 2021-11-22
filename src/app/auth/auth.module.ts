import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../pages/inicio/login/login.component';
import { MainComponent } from './pages/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HomeComponent } from '../pages/inicio/home/home.component';
import { NosotrosComponent } from '../pages/inicio/nosotros/nosotros.component';
import { AdopcionComponent } from '../pages/inicio/adopcion/adopcion.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import {RegisterComponent} from "../pages/inicio/register/register.component";
import {PagesModule} from "../pages/pages.module";


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    HomeComponent,
    NosotrosComponent,
    AdopcionComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        PagesModule,

    ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
