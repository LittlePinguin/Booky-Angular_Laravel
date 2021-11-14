import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooklistComponent } from './components/booklist/booklist.component';

import {MatIconModule} from '@angular/material/icon';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksByGenreComponent } from './components/books-by-genre/books-by-genre.component';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'books_by_genre/all', component:BooklistComponent},
  {path: ':id', component:BookDetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooklistComponent,
    BooksByGenreComponent,
    HomeComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
