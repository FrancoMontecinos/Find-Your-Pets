import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './componentes/list-post/list-post.component';
import { UserRegisterComponent } from './componentes/user-register/user-register.component';
import { PostPetRegisterComponent } from './componentes/post-pet-register/post-pet-register.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { MenuComponent } from './generic/menu/menu.component';
import {ArchwizardModule} from "angular-archwizard";



@NgModule({
  declarations: [
    ListPostComponent,
    UserRegisterComponent,
    PostPetRegisterComponent,
    ContactoComponent,
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ArchwizardModule
  ]
})
export class PagesModule { }
