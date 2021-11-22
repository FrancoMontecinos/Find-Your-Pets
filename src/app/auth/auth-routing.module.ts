import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {HomeComponent} from "../pages/inicio/home/home.component";
import {NosotrosComponent} from "../pages/inicio/nosotros/nosotros.component";
import {AdopcionComponent} from "../pages/inicio/adopcion/adopcion.component";
import {ContactoComponent} from "../pages/inicio/contacto/contacto.component";
import {RegisterComponent} from "../pages/inicio/register/register.component";
import {LoginComponent} from "../pages/inicio/login/login.component";
import {PostPetRegisterComponent} from "../pages/componentes/post-pet-register/post-pet-register.component";

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'adopcion', component: AdopcionComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'post', component: PostPetRegisterComponent },
      { path: 'post/all', component: PostPetRegisterComponent },

      { path: '**', redirectTo: 'home'},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
