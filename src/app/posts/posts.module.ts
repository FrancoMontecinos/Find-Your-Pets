import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptComponent } from './adopt/adopt.component';
import { ViewPostComponent } from './view-post/view-post.component';



@NgModule({
  declarations: [
    AdoptComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
