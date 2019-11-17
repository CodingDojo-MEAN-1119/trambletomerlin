import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
  } from '@angular/material';

import { AppComponent } from './app.component';
import {AuthorCreateComponent} from './authors/authors-create/author-create.component';
import { HeaderComponent } from './authors/header/header.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AppRoutingModule } from './authors/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    HeaderComponent,
    AuthorListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
