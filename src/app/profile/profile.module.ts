import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    ProfileComponent,
    MyPetsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
