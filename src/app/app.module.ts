import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    FavoritesComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,       
    RouterModule,        
    AppRoutingModule,    
    FormsModule,         
    ReactiveFormsModule, 
    HttpClientModule,    
    CommonModule         
  ],
  providers: [
    provideClientHydration(), 
    CartService               
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
