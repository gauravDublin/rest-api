import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CoursesService } from './courses.service';
import { AuthorService } from './author.service';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.component";
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
